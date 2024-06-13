import React, { useState } from 'react';
import './ESignModal.css';

function ESignModal({ isVisible, onClose, userId, onSubmit }) {
  const [eSignPassword, setESignPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(eSignPassword);
    setESignPassword('');
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center' }}>E-Signature</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User ID:</label>
            <input type="text" value={userId} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="eSignPassword">Password:</label>
            <input
              type="password"
              id="eSignPassword"
              name="eSignPassword"
              onChange={(e) => setESignPassword(e.target.value)}
              value={eSignPassword}
              required
            />
          </div>
          <div className="form-submit-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ESignModal;
