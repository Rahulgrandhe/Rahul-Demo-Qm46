// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
// Make sure this path is correct
import HomePage from './HomePage'; // Make sure this path is correct
import InflationChart from './InflationChart'; // Make sure this path is correct

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/LandingPage" element={<Landing/>}></Route>
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/inflation-chart" element={<InflationChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
