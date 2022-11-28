import "./HeaderBar.css";
import { setDisplay } from "./../AccountSideMenu/AccountSideMenu.js";
import * as ImIcons from 'react-icons/im';
import * as AiIcons from 'react-icons/ai';
function HeaderBar() {
  return (
    <div>
      <header>
        <div>
          <ImIcons.ImMenu className="headermenu" onClick={setDisplay}/>       
          {/* <h1 onClick={setDisplay}>Options</h1> */}
          <h2>Real World App</h2>
          <div>
            <button className='new-transaction-btn'>$ NEW</button>
            <AiIcons.AiFillBell size={25} className="notification-adjust" onClick={""}></AiIcons.AiFillBell> {/* onClick we add what needs to redirect to  */}
            {/* <button>Notif</button> */}
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
