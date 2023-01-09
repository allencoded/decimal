import { useContext } from "react";
import { UserContext } from "../../App";
import "./UserSwitch.css";

/**
 * Quick way to swap between admin and regular user.
 */
function UserSwitch() {
  const { isAdmin, toggleAdmin } = useContext(UserContext);
  return (
    <div className="user-switch-container">
      <div>
        <label className="switch">
          <input type="checkbox" onClick={() => toggleAdmin()} />
          <span className="slider round" />
        </label>
      </div>
      <div className="user-name">{isAdmin ? "Admin" : "User"}</div>
    </div>
  );
}

export default UserSwitch;
