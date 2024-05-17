import React, {Link} from "react";

function LandingPage() {
  return (
    <div style={{
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#007bff' }} >Welcome </h1>
        <div style={{ marginTop: '40px' }}>
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px 30px', margin: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>Document Master</button>
         <Link to ='/HomePage'> <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px 30px', margin: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }} >Document Manager</button></Link>
          <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px 30px', margin: '20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>Admin Panel</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
