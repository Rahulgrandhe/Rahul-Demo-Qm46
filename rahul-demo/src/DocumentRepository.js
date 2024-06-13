import React, { useState } from 'react';
import './DocumentRepository.css';
import NavAside from './NavAside';


function DocumentRepository() {
  const [formData, setFormData] = useState({
    department: '',
    documentType: '',
    documentNo: '',
    effectiveDate: '',
    status: '',
    category: '',
    reviewDate: '',
    versionNo: '',
    documentTitle: '',
    preparedBy: '',
    actions: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <NavAside />
     
      <div className="document-repository" style={{paddingTop:'0.2cm' , paddingLeft:'60px' }} >
        <h2 >DOCUMENT REPOSITORY</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <select
                id="department"
                name="department"
                onChange={handleInputChange}
                value={formData.department}
                required
              >
                <option value="QA">QA</option>
                <option value="QC">QC</option>
                <option value="PROD">PROD</option>
                <option value="ENG">ENG</option>
                <option value="DQA">DQA</option>
                <option value="WH">WH</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="documentNo">Document No.:</label>
              <input
                type="text"
                id="documentNo"
                name="documentNo"
                value={formData.documentNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="effectiveDate">Effective Date:</label>
              <input
                type="date"
                id="effectiveDate"
                name="effectiveDate"
                value={formData.effectiveDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                onChange={handleInputChange}
                value={formData.status}
                required
              >
                <option value="active">Active</option>
                <option value="obsolete">Obsolete</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="documentType">Document Type:</label>
              <select
                id="documentType"
                name="documentType"
                onChange={handleInputChange}
                value={formData.documentType}
                required
              >
                <option value="">None</option>
                <option value="SOP">SOP</option>
                <option value="Annexure">Annexure</option>
                <option value="Format">Format</option>
                <option value="Spec">Spec</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                onChange={handleInputChange}
                value={formData.category}
                required
              >
                <option value="General">General</option>
                <option value="Validation">Validation</option>
                <option value="DMS">DMS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="reviewDate">Review Date:</label>
              <input
                type="date"
                id="reviewDate"
                name="reviewDate"
                value={formData.reviewDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group go-button">
              <button type="submit">Go</button>
            </div>
          </div>
        </form>
      
    
      
    </>
  );
}

export default DocumentRepository;
