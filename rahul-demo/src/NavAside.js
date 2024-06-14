import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavAside.css';
import Draft from "./Draft";
import DocumentRepository from "./DocumentRepository";



function NavAside({ userId }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [documentStageOpen, setDocumentStageOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleDocumentStage = () => {
    setDocumentStageOpen(!documentStageOpen);
  };

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
                <p>User ID: {userId}</p>
                <p>Name: John Doe</p>
                <button className="signout-button">Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </nav>


      <div className="container">
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-item" onClick={toggleDocumentStage}>
            Document Stage
          </div>
          {documentStageOpen && (
            <div className="sidebar-subitem">
              <div><Link to="/Draft" style={{color:'white', textDecoration:'none'}}>Draft</Link></div>
              <div><Link to="/Review" style={{color:'white', textDecoration:'none'}}>Review</Link></div>
              <div><Link to="/Approve" style={{color:'white', textDecoration:'none'}}>Approve</Link></div>
              <div><Link to="/Department" style={{color:'white', textDecoration:'none'}}>Effective</Link></div>
            </div>
          )}
          
          <div className="sidebar-item">
            Audit Trails
          </div>
          <div className="sidebar-item">
           <Link to="/DocumentRepository" style={{color:'white', textDecoration:'none'}}>Document Repository</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default NavAside;
