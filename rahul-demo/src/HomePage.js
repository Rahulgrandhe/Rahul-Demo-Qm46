
import React, { useState, useRef, useEffect } from 'react';
import './HomePage.css';
import InflationChart from './InflationChart';

function HomePage() {
  const [formData, setFormData] = useState({
    documentType: 'mainDocument',
    documentTitle: '',
    department: '',
    category: '',
    template: '',
    documentNumber: '',
    qmsNo: '',
    trainingRequired: 'no',
    effectiveDate: '',
    description: ''
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [documentStageOpen, setDocumentStageOpen] = useState(false);
  const [createFormVisible, setCreateFormVisible] = useState(false);

  const profileRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  const generateDocumentNumber = () => {
    return `DOC-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      documentNumber: generateDocumentNumber(),
      qmsNo: `QMS-${Math.floor(1000 + Math.random() * 9000)}`
    }));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileRef]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleDocumentStage = () => {
    setDocumentStageOpen(!documentStageOpen);
  };

  const toggleCreateForm = () => {
    setCreateFormVisible(!createFormVisible);
  };

  const onClose = () => {
    setCreateFormVisible(false);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>&#9776;</button>
        <div className="navbar-center">
          <h1>DMS</h1>
        </div>
        <div className="navbar-right">
          <div className="profile" onClick={toggleProfile} ref={profileRef}>
            <img src="https://static.thenounproject.com/png/363640-200.png" alt="Profile" className="profile-icon" />
            {profileOpen && (
              <div className="profile-dropdown">
                <p>User ID: user123</p>
                <p>Name: John Doe</p>
                <button className="signout-button">Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="container" style={{marginLeft:'15%' ,width:"80%"}}>
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`} style={{marginLeft:"-20%"}}>
          <div className="sidebar-item" onClick={toggleDocumentStage}>
            Document Stage
          </div>
          {documentStageOpen && (
            <div className="sidebar-subitem">
              <div>Draft</div>
              <div>Review</div>
              <div>Approve</div>
              <div>Effective</div>
            </div>
          )}
          <div className="sidebar-item">
            Audit Trails
          </div>
          <div className="sidebar-item">
            Document Repository
          </div>
        </aside>
        <main className="main-content">
          <button className="create-new" onClick={toggleCreateForm}>Create New +</button>
          {createFormVisible && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 style={{ textAlign: 'center' }}>New Document</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Document Type:</label>
                    <div className="radio-group">
                      <label>
                        <input type="radio" value="mainDocument" name="documentType" onChange={handleInputChange} checked={formData.documentType === 'mainDocument'} />
                        Main Document
                      </label>
                      <label>
                        <input type="radio" value="childDocument" name="documentType" onChange={handleInputChange} checked={formData.documentType === 'childDocument'} />
                        Child Document
                      </label>
                    </div>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="documentTitle">Document Title:</label>
                    <input type="text" id="documentTitle" name="documentTitle" onChange={handleInputChange} value={formData.documentTitle} required />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <select id="department" name="department" onChange={handleInputChange} value={formData.department} required>
                      <option value="finance">Finance</option>
                      <option value="hr">Human Resources</option>
                      <option value="it">IT</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" onChange={handleInputChange} value={formData.category} required>
                      <option value="internal">Internal</option>
                      <option value="external">External</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="template">Template:</label>
                    <input type="text" id="template" name="template" onChange={handleInputChange} value={formData.template} required />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="documentNumber">Document No:</label>
                    <input type="text" id="documentNumber" name="documentNumber" value={formData.documentNumber} readOnly />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="qmsNo">QMS No:</label>
                    <input type="text" id="qmsNo" name="qmsNo" onChange={handleInputChange} value={formData.qmsNo} required />
                  </div>
    
                  <div className="form-group">
                    <label>Training Required:</label>
                    <div className="radio-group">
                      <label>
                        <input type="radio" value="yes" name="trainingRequired" onChange={handleInputChange} checked={formData.trainingRequired === 'yes'} />
                        Yes
                      </label>
                      <label>
                        <input type="radio" value="no" name="trainingRequired" onChange={handleInputChange} checked={formData.trainingRequired === 'no'} />
                        No
                      </label>
                    </div>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="effectiveDate">Effective Date:</label>
                    <input type="date" id="effectiveDate" name="effectiveDate" onChange={handleInputChange} value={formData.effectiveDate} required />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" onChange={handleInputChange} value={formData.description} required />
                  </div>
    
                  <div className="form-submit-container">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
        <InflationChart />
      </div>
    </div>
    
  );
}

export default HomePage;
