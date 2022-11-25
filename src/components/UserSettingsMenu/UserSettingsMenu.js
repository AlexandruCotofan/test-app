import "./UserSettingsMenu.css";

function UserSettingsMenu() {
  return (
    <div className="form-body">
      <form>
        <div className="form-main-body">
          <div>IMG</div>
          <div className="form-inputs">
            <input type="text" placeholder="First name" required></input>
            <input type="text" required placeholder="Last name"></input>
            <input type="email" required placeholder="Email address"></input>
            <input type="tel" required placeholder="Phone number"></input>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UserSettingsMenu;
