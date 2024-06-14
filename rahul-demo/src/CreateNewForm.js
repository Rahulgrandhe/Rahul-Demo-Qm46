// import React, { useState, useEffect } from 'react';
// import './CreateNewForm.css';
// import Draft from "./Draft";
// import ESignModal from "./ESignModal";

//  function CreateNewForm({ isVisible, onClose, onSubmit }) {
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

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(formData);
//     onClose();
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

//   if (!isVisible) return null;

//   return (
//     <div className="modal" id='Createnew'>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2 style={{ textAlign: 'center' }}>New Document</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Select Document:</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   value="mainDocument"
//                   name="documentType"
//                   onChange={handleInputChange}
//                   checked={formData.documentType === 'mainDocument'}
//                 />
//                 Main Document
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="childDocument"
//                   name="documentType"
//                   onChange={handleInputChange}
//                   checked={formData.documentType === 'childDocument'}
//                 />
//                 Child Document
//               </label>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="documentTitle">Document Title:</label>
//             <input
//               type="text"
//               id="documentTitle"
//               name="documentTitle"
//               onChange={handleInputChange}
//               value={formData.documentTitle}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="department">Document Type:</label>
//             <select
//               id="documentType"
//               name="documentType"
//               onChange={handleInputChange}
//               value={formData.documentType}
//               required
//             >
//               <option value="">None</option>
//               <option value="SOP">SOP</option>
//               <option value="Annexure">Annexure</option>
//               <option value="Format">Format</option>
//               <option value="Spec">Spec</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="department">Department:</label>
//             <select
//               id="department"
//               name="department"
//               onChange={handleInputChange}
//               value={formData.department}
//               required
//             >
//               <option value="QA">QA</option>
//               <option value="QC">QC</option>
//               <option value="PROD">PROD</option>
//               <option value="ENG">ENG</option>
//               <option value="DQA">DQA</option>
//               <option value="WH">WH</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="category">Category:</label>
//             <select
//               id="category"
//               name="category"
//               onChange={handleInputChange}
//               value={formData.category}
//               required
//             >
//               <option value="General">General</option>
//               <option value="Validation">Validation</option>
//               <option value="DMS">DMS</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="template">Template:</label>
//             <select
//               id="template"
//               name="template"
//               onChange={handleInputChange}
//               value={formData.template}
//               required
//             >
//               <option value="SOP Template">SOP Template</option>
//               <option value="Annexure Template">Annexure Template</option>
//               <option value="Format Template">Format Template</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="documentNumber">Document No:</label>
//             <input
//               type="text"
//               id="documentNumber"
//               name="documentNumber"
//               value={formData.documentNumber}
//               readOnly
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="qmsNo">QMS No:</label>
//             <input
//               type="text"
//               id="qmsNo"
//               name="qmsNo"
//               onChange={handleInputChange}
//               value={formData.qmsNo}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Training Required:</label>
//             <div className="radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   value="yes"
//                   name="trainingRequired"
//                   onChange={handleInputChange}
//                   checked={formData.trainingRequired === 'yes'}
//                 />
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="no"
//                   name="trainingRequired"
//                   onChange={handleInputChange}
//                   checked={formData.trainingRequired === 'no'}
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="effectiveDate">Effective Date:</label>
//             <input
//               type="date"
//               id="effectiveDate"
//               name="effectiveDate"
//               onChange={handleInputChange}
//               value={formData.effectiveDate}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="description">Description:</label>
//             <textarea
//               id="description"
//               name="description"
//               onChange={handleInputChange}
//               value={formData.description}
//               required
//             />
//           </div>

//           <div className="form-submit-container">
//             <button type="submit"><Link to="/ESignModal">Submit</Link></button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateNewForm;         



import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './CreateNewForm.css';
import Draft from "./Draft";
import ESignModal from "./ESignModal";

function CreateNewForm({ isVisible, onClose, onSubmit }) {
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

  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
    history.push('/ESignModal'); // Programmatically navigate to the new route
  };

  const generateDocumentNumber = () => {
    return `DOC-${Math.floor(1000 + Math.random() * 9000)}`;
  };

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      documentNumber: generateDocumentNumber()
    }));
  }, []);

  if (!isVisible) return null;

  return (
    <div className="modal" id='Createnew'>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center' }}>New Document</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Document:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="mainDocument"
                  name="documentType"
                  onChange={handleInputChange}
                  checked={formData.documentType === 'mainDocument'}
                />
                Main Document
              </label>
              <label>
                <input
                  type="radio"
                  value="childDocument"
                  name="documentType"
                  onChange={handleInputChange}
                  checked={formData.documentType === 'childDocument'}
                />
                Child Document
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="documentTitle">Document Title:</label>
            <input
              type="text"
              id="documentTitle"
              name="documentTitle"
              onChange={handleInputChange}
              value={formData.documentTitle}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Document Type:</label>
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
            <label htmlFor="template">Template:</label>
            <select
              id="template"
              name="template"
              onChange={handleInputChange}
              value={formData.template}
              required
            >
              <option value="SOP Template">SOP Template</option>
              <option value="Annexure Template">Annexure Template</option>
              <option value="Format Template">Format Template</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="documentNumber">Document No:</label>
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={formData.documentNumber}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="qmsNo">QMS No:</label>
            <input
              type="text"
              id="qmsNo"
              name="qmsNo"
              onChange={handleInputChange}
              value={formData.qmsNo}
              required
            />
          </div>

          <div className="form-group">
            <label>Training Required:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="yes"
                  name="trainingRequired"
                  onChange={handleInputChange}
                  checked={formData.trainingRequired === 'yes'}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  name="trainingRequired"
                  onChange={handleInputChange}
                  checked={formData.trainingRequired === 'no'}
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="effectiveDate">Effective Date:</label>
            <input
              type="date"
              id="effectiveDate"
              name="effectiveDate"
              onChange={handleInputChange}
              value={formData.effectiveDate}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
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

export default CreateNewForm;
