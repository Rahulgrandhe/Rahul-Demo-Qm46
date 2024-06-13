import React, { useState } from 'react';

const employees = [
  { id: 1, name: 'John Doe', department: 'Finance', salary: 50000 },
  { id: 2, name: 'Jane Smith', department: 'HR', salary: 60000 },
  { id: 3, name: 'Alice Johnson', department: 'IT', salary: 70000 },
  { id: 4, name: 'Chris Lee', department: 'Marketing', salary: 55000 },
  { id: 5, name: 'Michael Brown', department: 'Finance', salary: 50000 },
];

function App() {
  const [searchSalary, setSearchSalary] = useState('');

  const handleSearchChange = (event) => {
    setSearchSalary(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return searchSalary === '' || employee.salary.toString() === searchSalary;
  });

  return (
    <div>
      <h1>Employee Data</h1>
      <input
        type="text"
        placeholder="Search by salary"
        value={searchSalary}
        onChange={handleSearchChange}
        className="search-input"
      />
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
