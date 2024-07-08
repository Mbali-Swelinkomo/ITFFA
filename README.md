## Job Connect Website

JobConnect aims to bridge the gap between job seekers and employers by providing a dynamic, efficient, and secure web-based platform.
By focusing on usability, security, and performance, JobConnect will create a seamless job application experience for users while enabling employers to effectively manage their job postings and applications.


This is NextJS Application 

At the creation of this Project Node v18, Next v13.4.3, React v18.2.0, Typescript v5.0.4 and Tailwind v3.3.2 were used

Running the Frontend
To Install the project dependencies run, 

```bash

npm install

```
First, run the development server:

```bash
npm run dev

```


Running the Backend
To start the backend service, run:

```bash

node server.js

```
Setting Up the Database

Install PostgreSQL: Ensure PostgreSQL is installed on your machine. You can download it from here.

Create the Database: Create a new database on your local PostgreSQL instance.

```bash

createdb jobconnect

```

Import the Database: Use the SQL dump file provided to import the database structure and data.

```bash
psql -U myuser -d jobconnect -f jobconnect_db.sql

```

Update Database Configuration: Ensure your application is configured to connect to your local PostgreSQL database. 
This typically involves setting environment variables or updating a configuration file.

```bash
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=jobconnect

```

## Developed by

Mbali Swelinkomo