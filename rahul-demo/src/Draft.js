import React from 'react';
import './Draft.css';
import HomePage from './HomePage';
import { Link } from '@mui/material';
import CreateNewForm from './CreateNewForm';
import Edit from './Edit';


function Draft() {
  const tableData = [
    {
      documentNo: 'SOP/024/001',
      department: 'QA',
      documentType: 'SOP',
      category: 'General',
      documentTitle: 'SOP of SOP',
      status: 'Active',
      preparedBy: 'Nikhil Cheedella',
    },
    {
      documentNo: 'SOP/024/002',
      department: 'QA',
      documentType: 'SOP',
      category: 'General',
      documentTitle: 'SOP on Handling Test Procedures',
      status: 'Active',
      preparedBy: 'Harsha',
    },
  ];

  return (
    <>
    <HomePage/>
    <div style={{paddingTop:'0.2cm',paddingLeft:'130px'}}>
    <div className="draft-container" >
      <div className="button-container">
        <CreateNewForm/>
        <button className="draft-button"><Link to="/CreateNewForm">Create New</Link></button>
        <button className="draft-button"><Link to="/Edit">Edit</Link></button>
        <button className="draft-button">Send For Review</button>
        <button className="draft-button">Status Change</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Document No</th>
            <th>Department</th>
            <th>Document Type</th>
            <th>Category</th>
            <th>Document Title</th>
            <th>Status</th>
            <th>Prepared By</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td><input type="checkbox"/></td>
              <td>{rowData.documentNo}</td>
              <td>{rowData.department}</td>
              <td>{rowData.documentType}</td>
              <td>{rowData.category}</td>
              <td>{rowData.documentTitle}</td>
              <td>{rowData.status}</td>
              <td>{rowData.preparedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default Draft;
