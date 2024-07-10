const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { Pool } = require('pg');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const bcrypt = require('bcrypt');
require('dotenv').config();
const app = express();
const port = 8080;
const cors = require('cors');

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client-side origin
  credentials: true
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// CORS configuration to allow requests from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Session middleware
app.use(
  session({
    store: new pgSession({
      pool: pool, // Connection pool for PostgreSQL
      tableName: 'session' // Ensure this matches the name of your session table
    }),
    secret: process.env.SESSION_SECRET, // Add your session secret here
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
  })
);

// Endpoint to get user details
app.get('/api/user', async (req, res) => {
  const userEmail = req.session.userEmail; // Assuming user email is stored in session

  console.log('Session ID:', req.session.id); // Debugging line
  console.log('Session Data:', req.session); // Debugging line

  if (!userEmail) {
    console.log('Unauthorized access attempt - No session email'); // Debugging line
    return res.status(401).json({ message: 'Unauthorized', status: 401 });
  }

  try {
    const query = 'SELECT id, name, surname, email FROM users WHERE email = $1';
    const values = [userEmail];

    const result = await pool.query(query, values);
    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found', status: 404 });
    }

    res.status(200).json({ user, status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Error fetching user', status: 500 });
  }
});

// Endpoint to handle root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Job Application API');
});

// Endpoint to submit the application
app.post('/submit-application', upload.fields([{ name: 'resume' }, { name: 'otherDocuments' }]), async (req, res) => {
  const applicationData = req.body;
  const files = req.files;

  try {
    // Save the application data to the database
    const query = `
      INSERT INTO applications (name, surname, mobile_number, email, gender, ethnicity, general_consent, cover_letter, resume, other_documents)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id;
    `;
    const values = [
      applicationData.name,
      applicationData.surname,
      applicationData.mobileNumber,
      applicationData.email,
      applicationData.gender,
      applicationData.ethnicity,
      applicationData.generalConsent,
      applicationData.coverLetter,
      files ? files.resume[0].path : null,  // Save the resume file path to the database
      files ? files.otherDocuments[0].path : null,  // Save the otherDocuments file path to the database
    ];

    const result = await pool.query(query, values);
    const newApplicationId = result.rows[0].id;

    // Respond with a success message
    res.status(200).json({ message: 'Application submitted successfully!', applicationId: newApplicationId });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Error submitting application.' });
  }
});

// Endpoint to create an account
app.post('/api/create-account', async (req, res) => {
  console.log('Received request to create account:', req.body); // Add this line for logging

  const { name, surname, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (name, surname, email, password)
      VALUES ($1, $2, $3, $4);
    `;
    const values = [name, surname, email, hashedPassword];

    await pool.query(query, values);

    // Set the user email in the session
    req.session.userEmail = email;
    req.session.save((err) => {
      if (err) {
        console.error('Error saving session:', err);
        return res.status(500).json({ message: 'Error creating account', status: 500 });
      }
      res.status(201).json({ message: 'Account created successfully', status: 201 });
    });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ message: 'Error creating account', status: 500 });
  }
});

// Endpoint to login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        req.session.userEmail = user.email; // Store user email in session
        req.session.save((err) => {
          if (err) {
            console.error('Error saving session:', err);
            return res.status(500).send('Error logging in');
          }
          console.log('Session after login:', req.session); // Debugging line
          res.status(200).send({ name: user.name, surname: user.surname, email: user.email });
        });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Error logging in');
  }
});

// Endpoint to get user applications
app.get('/api/my-applications', async (req, res) => {
  const userEmail = req.session.userEmail; // Use the email stored in session

  console.log('Session ID:', req.session.id); // Debugging line
  console.log('Session Data:', req.session); // Debugging line

  if (!userEmail) {
    console.log('Unauthorized access attempt - No session email'); // Debugging line
    return res.status(401).json({ message: 'Unauthorized', status: 401 });
  }

  try {
    const query = `
      SELECT id, job_title AS "jobTitle", status, created_at AS "createdAt"
      FROM applications
      WHERE email = $1
      ORDER BY created_at DESC;
    `;
    const values = [userEmail];

    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

// Endpoint to logout
app.post('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ message: 'Error logging out' });
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  } else {
    res.status(400).json({ message: 'No session to destroy' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
