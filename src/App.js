import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar.js";
import AccountSideMenu from "./components/AccountSideMenu/AccountSideMenu.js";
import UserSettingsMenu from "./components/UserSettingsMenu/UserSettingsMenu.js";

function App() {
  return (
    <div className="App">
      <AccountSideMenu />
      <main>
        <HeaderBar />
        <UserSettingsMenu />
      </main>
      
    </div>
  );
}

export default App;
