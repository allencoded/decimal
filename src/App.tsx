import { useState } from 'react';
import './App.css';
import UserSwitch from './components/forms/UserSwitch';
import Invoices from './components/invoices/invoices';

function App() {
  const [isAdmin, setAdmin] = useState(false);

  function toggleAdmin() {
    setAdmin(!isAdmin);
  }

  return (
    <div className="app">
      <UserSwitch isAdmin={isAdmin} toggleAdmin={toggleAdmin} />
      <div className="app-container">
        <Invoices />
      </div>
    </div>
  );
}

export default App;