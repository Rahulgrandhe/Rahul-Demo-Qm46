import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import HomePage from './HomePage'; 
import InflationChart from './InflationChart'; 

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
