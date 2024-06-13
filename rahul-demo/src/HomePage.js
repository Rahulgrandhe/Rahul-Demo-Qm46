
// // import React, { useState, useRef, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './HomePage.css';
// // import Draft from './Draft';

// // function HomePage() {
// //   const [formData, setFormData] = useState({
// //     documentType: 'mainDocument',
// //     documentTitle: '',
// //     department: '',
// //     category: '',
// //     template: '',
// //     documentNumber: '',
// //     qmsNo: '',
// //     trainingRequired: 'no',
// //     effectiveDate: '',
// //     description: ''
// //   });

// // const [createFormVisible, setCreateFormVisible] = useState(false);
// // const [eSignModalVisible, setESignModalVisible] = useState(false);
// // const [userId, setUserId] = useState('user123');
// // const [eSignPassword, setESignPassword] = useState('');
// // const [sidebarOpen, setSidebarOpen] = useState(false);
// // const [profileOpen, setProfileOpen] = useState(false);
// // const [documentStageOpen, setDocumentStageOpen] = useState(false);
// // const profileRef = useRef(null);


// // const handleInputChange = (event) => {
// //   const { name, value } = event.target;
// //   setFormData(prevState => ({
// //     ...prevState,
// //     [name]: value
// //   }));
// // };

// // const handleSubmit = (event) => {
// //   event.preventDefault();
// //   console.log('Form Data:', formData);
// //   setCreateFormVisible(false);
// //   setESignModalVisible(true);
// // };

// // const handleESignSubmit = (event) => {
// //   event.preventDefault();
// //   console.log('E-Sign Password:', eSignPassword);
// //   // Handle e-signature validation and submission here
// //   setESignModalVisible(false);
// // };

// // const generateDocumentNumber = () => {
// //   return `DOC-${Math.floor(1000 + Math.random() * 9000)}`;
// // };

// // useEffect(() => {
// //   setFormData(prevState => ({
// //     ...prevState,
// //     documentNumber: generateDocumentNumber()
// //   }));
// // }, []);
// // const toggleCreateForm = () => {
// //   setCreateFormVisible(!createFormVisible);
// // };

// // const onClose = () => {
// //   setCreateFormVisible(false);
// // };
// // useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (profileRef.current && !profileRef.current.contains(event.target)) {
// //         setProfileOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [profileRef]);

// //   const toggleSidebar = () => {
// //     setSidebarOpen(!sidebarOpen);
// //   };

// //   const toggleProfile = () => {
// //     setProfileOpen(!profileOpen);
// //   };

// //   const toggleDocumentStage = () => {
// //     setDocumentStageOpen(!documentStageOpen);
// //   };

// //   return (
// //     <>
// //     <div className="App">
// //       <nav className="navbar">
// //         <button className="hamburger" onClick={toggleSidebar}>&#9776;</button>
// //         <div className="navbar-center">
// //           <h1>DMS</h1>
// //         </div>
// //         <div className="navbar-right">
// //           <div className="profile" onClick={toggleProfile} ref={profileRef}>
// //             <img src="https://static.thenounproject.com/png/363640-200.png" alt="Profile" className="profile-icon" />
// //             {profileOpen && (
// //               <div className="profile-dropdown">
// //                 <p>User ID: {userId}</p>
// //                 <p>Name: John Doe</p>
// //                 <button className="signout-button">Sign Out</button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </nav>
// //       <div className="container" style={{ marginLeft: '15%', width: "80%" }}>
// //         <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`} style={{ marginLeft: "-20%" }}>
// //           <div className="sidebar-item" onClick={toggleDocumentStage}>
// //             Document Stage
// //           </div>
// //           {documentStageOpen && (
// //             <div className="sidebar-subitem">
// //              <div><a href="./Draft">Draft</a></div>
// //               <div>Review</div>
// //               <div>Approve</div>
// //               <div><a href="./Department">Effective</a></div>
// //             </div>
// //           )}
// //           <div className="sidebar-item">
// //             Audit Trails
// //           </div>
// //           <div className="sidebar-item">
// //             Document Repository
// //           </div>
// //         </aside>
// //         </div>
// //     </div>
// //     <main className="main-content">
// //           <button className="create-new" onClick={toggleCreateForm}>Create New +</button>
// //           {createFormVisible && (
// //             <div className="modal">
// //               <div className="modal-content">
// //                 <span className="close" onClick={onClose}>&times;</span>
// //                 <h2 style={{ textAlign: 'center' }}>New Document</h2>

// //                 <form onSubmit={handleSubmit}>
// //                   <div className="form-group">
// //                     <label>Select Document:</label>
// //                     <div className="radio-group">
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           value="mainDocument"
// //                           name="documentType"
// //                           onChange={handleInputChange}
// //                           checked={formData.documentType === 'mainDocument'}
// //                         />
// //                         Main Document
// //                       </label>
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           value="childDocument"
// //                           name="documentType"
// //                           onChange={handleInputChange}
// //                           checked={formData.documentType === 'childDocument'}
// //                         />
// //                         Child Document
// //                       </label>
// //                     </div>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="department">Document Type:</label>
// //                     <select id="department" name="department" onChange={handleInputChange} value={formData.department} required>
// //                       <option value="">None</option>
// //                       <option value="SOP">SOP</option>
// //                       <option value="Annexure">Annexure</option>
// //                       <option value="Format">Format</option>
// //                       <option value="Spec">Spec</option>
// //                     </select>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="documentTitle">Document Title:</label>
// //                     <input type="text" id="documentTitle" name="documentTitle" onChange={handleInputChange} value={formData.documentTitle} required />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="department">Department:</label>
// //                     <select id="department" name="department" onChange={handleInputChange} value={formData.department} required>
// //                       <option value="QA">QA</option>
// //                       <option value="QC">QC</option>
// //                       <option value="PROD">PROD</option>
// //                       <option value="ENG">ENG</option>
// //                       <option value="DQA">DQA</option>
// //                       <option value="WH">WH</option>
// //                     </select>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="category">Category:</label>
// //                     <select id="category" name="category" onChange={handleInputChange} value={formData.category} required>
// //                       <option value="General">General</option>
// //                       <option value="Validation">Validation</option>
// //                       <option value="DMS">DMS</option>
// //                     </select>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="template">Template:</label>
// //                     <select id="template" name="template" onChange={handleInputChange} value={formData.template} required >
// //                       <option value="SOP Template">SOP Template</option>
// //                       <option value="Annexure Template">Annexure Template</option>
// //                       <option value="Format Template">Format Template</option>
// //                     </select>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="documentNumber">Document No:</label>
// //                     <input type="text" id="documentNumber" name="documentNumber" value={formData.documentNumber} readOnly />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="qmsNo">QMS No:</label>
// //                     <input type="text" id="qmsNo" name="qmsNo" onChange={handleInputChange} value={formData.qmsNo} required />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Training Required:</label>
// //                     <div className="radio-group">
// //                       <label>
// //                         <input type="radio" value="yes" name="trainingRequired" onChange={handleInputChange} checked={formData.trainingRequired === 'yes'} />
// //                         Yes
// //                       </label>
// //                       <label>
// //                         <input type="radio" value="no" name="trainingRequired" onChange={handleInputChange} checked={formData.trainingRequired === 'no'} />
// //                         No
// //                       </label>
// //                     </div>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="effectiveDate">Effective Date:</label>
// //                     <input type="date" id="effectiveDate" name="effectiveDate" onChange={handleInputChange} value={formData.effectiveDate} required />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="description">Description:</label>
// //                     <textarea id="description" name="description" onChange={handleInputChange} value={formData.description} required />
// //                   </div>

// //                   <div className="form-submit-container">
// //                     <button type="submit">Submit</button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           )}
// //           {eSignModalVisible && (
// //             <div className="modal">
// //               <div className="modal-content">
// //                 <span className="close" onClick={() => setESignModalVisible(false)}>&times;</span>
// //                 <h2 style={{ textAlign: 'center' }}>E-Signature</h2>
// //                 <form onSubmit={handleESignSubmit}>
// //                   <div className="form-group">
// //                     <label>User ID:</label>
// //                     <input type="text" value={userId} readOnly />
// //                   </div>
// //                   <div className="form-group">
// //                     <label htmlFor="eSignPassword">Password:</label>
// //                     <input
// //                       type="password"
// //                       id="eSignPassword"
// //                       name="eSignPassword"
// //                       onChange={(e) => setESignPassword(e.target.value)}
// //                       value={eSignPassword}
// //                       required
// //                     />
// //                   </div>
// //                   <div className="form-submit-container">
// //                     <button type="submit">Submit</button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           )}
// //            </main>
// //     </>
// //   );

// // }
// // export default HomePage;

// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';
// import Draft from './Draft';

// function HomePage() {
//   const [formData, setFormData] = useState({
//     documentType: 'mainDocument',
//     documentTitle: '',
//     department: '',
//     category: '',
//     template: '',
//     documentNumber: '',
//     qmsNo: '',
//     trainingRequired: 'no',
//     effectiveDate: '',
//     description: ''
//   });

//   const [createFormVisible, setCreateFormVisible] = useState(false);
//   const [eSignModalVisible, setESignModalVisible] = useState(false);
//   const [userId, setUserId] = useState('user123');
//   const [eSignPassword, setESignPassword] = useState('');
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [documentStageOpen, setDocumentStageOpen] = useState(false);
//   const profileRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Form Data:', formData);
//     setCreateFormVisible(false);
//     setESignModalVisible(true);
//   };

//   const handleESignSubmit = (event) => {
//     event.preventDefault();
//     console.log('E-Sign Password:', eSignPassword);
//     // Handle e-signature validation and submission here
//     setESignModalVisible(false);
//   };

//   const generateDocumentNumber = () => {
//     return `DOC-${Math.floor(1000 + Math.random() * 9000)}`;
//   };

//   useEffect(() => {
//     setFormData(prevState => ({
//       ...prevState,
//       documentNumber: generateDocumentNumber()
//     }));
//   }, []);

//   const toggleCreateForm = () => {
//     setCreateFormVisible(!createFormVisible);
//   };

//   const onClose = () => {
//     setCreateFormVisible(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileRef.current && !profileRef.current.contains(event.target)) {
//         setProfileOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [profileRef]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   const toggleDocumentStage = () => {
//     setDocumentStageOpen(!documentStageOpen);
//   };

//   return (
//     <div className="App" id='homepage'>
//       <nav className="navbar">
//         <button className="hamburger" onClick={toggleSidebar}>&#9776;</button>
//         <div className="navbar-center">
//           <h1>DMS</h1>
//         </div>
//         <div className="navbar-right">
//           <div className="profile" onClick={toggleProfile} ref={profileRef}>
//             <img src="https://static.thenounproject.com/png/363640-200.png" alt="Profile" className="profile-icon" />
//             {profileOpen && (
//               <div className="profile-dropdown">
//                 <p>User ID: {userId}</p>
//                 <p>Name: John Doe</p>
//                 <button className="signout-button">Sign Out</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//       <div className="container" style={{ marginLeft: '15%', width: "80%" }}>
//         <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`} style={{ marginLeft: "-20%" }}>
//           <div className="sidebar-item" onClick={toggleDocumentStage}>
//             Document Stage
//           </div>
//           {documentStageOpen && (
//             <div className="sidebar-subitem">
//               <div><Link to="./Draft">Draft</Link></div>
//               <div>Review</div>
//               <div>Approve</div>
//               <div><Link to="./Department">Effective</Link></div>
//             </div>
//           )}
//           <div className="sidebar-item">
//             Audit Trails
//           </div>
//           <div className="sidebar-item">
//             Document Repository
//           </div>
//         </aside>
//         <main className="main-content">
//           <button className="create-new" onClick={toggleCreateForm}>Create New +</button>
//           {createFormVisible && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={onClose}>&times;</span>
//                 <h2 style={{ textAlign: 'center' }}>New Document</h2>

//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label>Select Document:</label>
//                     <div className="radio-group">
//                       <label>
//                         <input
//                           type="radio"
//                           value="mainDocument"
//                           name="documentType"
//                           onChange={handleInputChange}
//                           checked={formData.documentType === 'mainDocument'}
//                         />
//                         Main Document
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           value="childDocument"
//                           name="documentType"
//                           onChange={handleInputChange}
//                           checked={formData.documentType === 'childDocument'}
//                         />
//                         Child Document
//                       </label>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="documentTitle">Document Title:</label>
//                     <input
//                       type="text"
//                       id="documentTitle"
//                       name="documentTitle"
//                       onChange={handleInputChange}
//                       value={formData.documentTitle}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="department">Document Type:</label>
//                     <select
//                       id="department"
//                       name="department"
//                       onChange={handleInputChange}
//                       value={formData.department}
//                       required
//                     >
//                       <option value="">None</option>
//                       <option value="SOP">SOP</option>
//                       <option value="Annexure">Annexure</option>
//                       <option value="Format">Format</option>
//                       <option value="Spec">Spec</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="department">Department:</label>
//                     <select
//                       id="department"
//                       name="department"
//                       onChange={handleInputChange}
//                       value={formData.department}
//                       required
//                     >
//                       <option value="QA">QA</option>
//                       <option value="QC">QC</option>
//                       <option value="PROD">PROD</option>
//                       <option value="ENG">ENG</option>
//                       <option value="DQA">DQA</option>
//                       <option value="WH">WH</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="category">Category:</label>
//                     <select
//                       id="category"
//                       name="category"
//                       onChange={handleInputChange}
//                       value={formData.category}
//                       required
//                     >
//                       <option value="General">General</option>
//                       <option value="Validation">Validation</option>
//                       <option value="DMS">DMS</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="template">Template:</label>
//                     <select
//                       id="template"
//                       name="template"
//                       onChange={handleInputChange}
//                       value={formData.template}
//                       required
//                     >
//                       <option value="SOP Template">SOP Template</option>
//                       <option value="Annexure Template">Annexure Template</option>
//                       <option value="Format Template">Format Template</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="documentNumber">Document No:</label>
//                     <input
//                       type="text"
//                       id="documentNumber"
//                       name="documentNumber"
//                       value={formData.documentNumber}
//                       readOnly
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="qmsNo">QMS No:</label>
//                     <input
//                       type="text"
//                       id="qmsNo"
//                       name="qmsNo"
//                       onChange={handleInputChange}
//                       value={formData.qmsNo}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Training Required:</label>
//                     <div className="radio-group">
//                       <label>
//                         <input
//                           type="radio"
//                           value="yes"
//                           name="trainingRequired"
//                           onChange={handleInputChange}
//                           checked={formData.trainingRequired === 'yes'}
//                         />
//                         Yes
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           value="no"
//                           name="trainingRequired"
//                           onChange={handleInputChange}
//                           checked={formData.trainingRequired === 'no'}
//                         />
//                         No
//                       </label>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="effectiveDate">Effective Date:</label>
//                     <input
//                       type="date"
//                       id="effectiveDate"
//                       name="effectiveDate"
//                       onChange={handleInputChange}
//                       value={formData.effectiveDate}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                     <textarea
//                       id="description"
//                       name="description"
//                       onChange={handleInputChange}
//                       value={formData.description}
//                       required
//                     />
//                   </div>

//                   <div className="form-submit-container">
//                     <button type="submit">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//           {eSignModalVisible && (
//             <div className="modal">
//               <div className="modal-content">
//                 <span className="close" onClick={() => setESignModalVisible(false)}>&times;</span>
//                 <h2 style={{ textAlign: 'center' }}>E-Signature</h2>
//                 <form onSubmit={handleESignSubmit}>
//                   <div className="form-group">
//                     <label>User ID:</label>
//                     <input type="text" value={userId} readOnly />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="eSignPassword">Password:</label>
//                     <input
//                       type="password"
//                       id="eSignPassword"
//                       name="eSignPassword"
//                       onChange={(e) => setESignPassword(e.target.value)}
//                       value={eSignPassword}
//                       required
//                     />
//                   </div>
//                   <div className="form-submit-container">
//                     <button type="submit">Submit</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default HomePage;




// import React, { useState } from 'react';
// import './HomePage.css';
// import CreateNewForm from './CreateNewForm';
// import ESignModal from './ESignModal';
// import NavAside from './NavAside';

// function HomePage() {
//   const [createFormVisible, setCreateFormVisible] = useState(false);
//   const [eSignModalVisible, setESignModalVisible] = useState(false);
//   const [userId] = useState('user123');

//   const handleFormSubmit = (formData) => {
//     console.log('Form Data:', formData);
//     setESignModalVisible(true);
//   };

//   const handleESignSubmit = (password) => {
//     console.log('E-Sign Password:', password);
//     // Handle e-signature validation and submission here
//   };

//   const toggleCreateForm = () => {
//     setCreateFormVisible(!createFormVisible);
//   };

//   return (
//     <div>
//       <NavAside userId={userId} />
//       <main className="main-content">
//         <button className="create-new" onClick={toggleCreateForm}>Create New +</button>
//         <CreateNewForm
//           isVisible={createFormVisible}
//           onClose={() => setCreateFormVisible(false)}
//           onSubmit={handleFormSubmit}
//         />
//         <ESignModal
//           isVisible={eSignModalVisible}
//           onClose={() => setESignModalVisible(false)}
//           userId={userId}
//           onSubmit={handleESignSubmit}
//         />
//       </main>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState } from 'react';
import './HomePage.css';
import NavAside from './NavAside';

function HomePage() {
  const [userId] = useState('user123');

  return (
    <div>
      <NavAside userId={userId} />
      <main className="main-content">
      </main>
    </div>
  );
}

export default HomePage;