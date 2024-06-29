import React from "react";

const UserApplications: React.FC = () => {
  // Mock data, replace with actual data fetching logic
  const applications = [
    { id: 1, title: "Junior Project Manager", date: "15-06-2020" },
    { id: 2, title: "Front-End Developer", date: "15-06-2020" },
  ];

  return (
    <div className="applications">
      <h2>Your Applications</h2>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            {application.title} - {application.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserApplications;
