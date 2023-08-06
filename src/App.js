import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual API endpoint or JSON file path
    axios.get("https://localhost:7153/Employee")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      {employee ? (
        <div>
          <h1>Employee Information</h1>
          <div>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.firstName} {employee.lastName}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>
            <p>Position: {employee.position}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Hire Date: {employee.hireDate}</p>
            <h2>Address</h2>
            <p>Street: {employee.address.street}</p>
            <p>City: {employee.address.city}</p>
            <p>State: {employee.address.state}</p>
            <p>Zip Code: {employee.address.zipCode}</p>
            <h2>Skills</h2>
            <ul>
              {employee.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h2>Projects</h2>
            <ul>
              {employee.projects.map((project, index) => (
                <li key={index}>
                  <p>Name: {project.name}</p>
                  <p>Role: {project.role}</p>
                  <p>Start Date: {project.startDate}</p>
                  <p>End Date: {project.endDate ? project.endDate : "Ongoing"}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading employee data...</p>
      )}
    </div>
  );
}

export default App;

