import "./UserSettingsMenu.css";

function UserSettingsMenu() {
  return (
    <div className="form-body">
        <p>User Settings</p>
      <form>
        <div className="form-main-body">
          <div>IMG</div>
          <div className="form-inputs">
            <input type="text" placeholder="First name" required></input>
            <input type="text" placeholder="Last name" required></input>
            <input type="email" placeholder="Email address" required></input>
            <input type="tel" placeholder="Phone number" required></input>
          </div>
        </div>
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}

export default UserSettingsMenu;
