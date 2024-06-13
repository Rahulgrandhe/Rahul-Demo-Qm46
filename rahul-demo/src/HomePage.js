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