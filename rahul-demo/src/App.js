// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Landing from './Landing';
// import Login from './Login';
// import HomePage from './HomePage'; 
// import InflationChart from './InflationChart'; 
// import Draft from './Draft';
// import Department from './Effective';


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login/>} />
//           <Route path="/LandingPage" element={<Landing/>} />
//           <Route path="/HomePage" element={<HomePage/>} />
//           <Route path="/inflation-chart" element={<InflationChart />} />
//           <Route path='/Draft' element={<Draft/>}/>
//           <Route path='/Department' element={<Department/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




// import MainArea from './mainArea';
// import Edit  from './Edit';
// import CreateNew from './CreateNew';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Draft from './Draft';
import Effective from './Effective';
import DocumentRepository from './DocumentRepository';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Draft" element={<Draft />} />
        <Route path="/Effective" element={<Effective />} />
        <Route path="/DocumentRepository" element={<DocumentRepository/>}/>

      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react'
// import OrganizationPage from './Organization';

// const App = () => {
//   return (
//     <div>
//       <Organization/>
//     </div>
//   )
// }

// export default App
