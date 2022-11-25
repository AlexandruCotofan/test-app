import "./AccountSideMenu.css";

export function setDisplay() {
    if (document.getElementById("aside").style.display === "flex") {
        document.getElementById("aside").style.display = "none";
    } else {
        document.getElementById("aside").style.display = "flex";
    }
}

function AccountSideMenu() {
    const accountFirstName = 'John';
    const accountLastName = 'Doe';
    const accountEmail = 'johndoe@generic.com';
    const balance = 10000;
  return (
    <aside id="aside">
      <section className="account-credentials">
        <div className='ph-img'>IMG</div>
        <div>
          <p>{accountFirstName} {accountLastName}</p>
          <p className='account-email'>{accountEmail}</p>
        </div>
      </section>
      <div className="account-balance">
        <h1>${balance}</h1>
        <p>Account Balance</p>
      </div>
      <section className="account-options">
        <button>
          <div>IMG</div>
          <p>Home</p>
        </button>
        <button>
          <div>IMG</div>
          <p>My Account</p>
        </button>
        <button>
          <div>IMG</div>
          <p>Bank Accounts</p>
        </button>
        <button>
          <div>IMG</div>
          <p>Notifications</p>
        </button>
        <button>
          <div>IMG</div>
          <p>Logout</p>
        </button>
      </section>
    </aside>
  );
}

export default AccountSideMenu;
