import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import HomePage from './HomePage'; 
import Draft from './Draft';
import Department from './Effective';
import Effective from './Effective';
import DocumentRepository from './DocumentRepository';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/LandingPage" element={<Landing/>} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path='/Draft' element={<Draft/>}/>
          <Route path="/Effective" element={<Effective />} />
          <Route path='/Department' element={<Department/>}/>
          <Route path="/DocumentRepository" element={<DocumentRepository/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import Draft from './Draft';
// import Effective from './Effective';
// import DocumentRepository from './DocumentRepository';
// import Login from './Login';
// import Landing from './Landing';

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/" element={<Landing />} />
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Draft" element={<Draft />} />
//         <Route path="/Effective" element={<Effective />} />
//         <Route path="/DocumentRepository" element={<DocumentRepository/>}/>

//       </Routes>
//     </Router>
//   );
// }

// export default App;

// // import React from 'react'
// // import OrganizationPage from './Organization';

// // const App = () => {
// //   return (
// //     <div>
// //       <Organization/>
// //     </div>
// //   )
// // }

// // export default App
