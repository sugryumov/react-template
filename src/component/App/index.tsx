import React from 'react';
import Navigation from 'common/components/Navigation';
import Routing from 'common/components/Routing';
import './index.css';

function App() {
  return (
    <>
      <header className="header-app">
        <Navigation />
      </header>

      <Routing />
    </>
  );
}

export default App;
