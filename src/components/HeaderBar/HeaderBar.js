import "./HeaderBar.css";
import { setDisplay } from "./../AccountSideMenu/AccountSideMenu.js";

function HeaderBar() {
  return (
    <div>
      <header>
        <div>
          <button onClick={setDisplay}>Options</button>
          <h2>Real World App</h2>
          <div>
            <button className='new-transaction-btn'>$ NEW</button>
            <button>Notif</button>
          </div>
        </div>
        <div className="header-selection">
          <p>EVERYONE</p>
          <p>FRIENDS</p>
          <p>MINE</p>
        </div>
      </header>
    </div>
  );
}

export default HeaderBar;
