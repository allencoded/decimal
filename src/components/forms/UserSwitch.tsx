import './UserSwitch.css';

interface IProps {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

/**
 * Quick way to swap between admin and regular user.
 */
function UserSwitch({ isAdmin, toggleAdmin }: IProps) {
  return (
    <div className="user-switch-container">
      <div>
        <label className="switch">
          <input type="checkbox" onClick={() => toggleAdmin()}/>
          <span className="slider round" />
        </label>
      </div>
      <div className="user-name">{isAdmin ? 'Admin' : 'User'}</div>
    </div>
  );
}

export default UserSwitch;