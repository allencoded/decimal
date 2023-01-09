import { createContext, useState } from "react";
import "./App.css";
import UserSwitch from "./components/forms/UserSwitch";
import Invoices from "./components/invoices/Invoices";

/**
 * User context - checks for and sets isAdmin
 */
export const UserContext = createContext({
  isAdmin: false,
  toggleAdmin: () => {},
});

function App() {
  const [isAdmin, setAdmin] = useState(false);

  function toggleAdmin() {
    setAdmin(!isAdmin);
  }

  const contextValue = { isAdmin, toggleAdmin };

  return (
    <UserContext.Provider value={contextValue}>
      <div className="app">
        <UserSwitch />
        <div className="app-container">
          <Invoices />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
