import "./App.css";
import HeaderBar from "./components/HeaderBar/HeaderBar.js";
import AccountSideMenu from "./components/AccountSideMenu/AccountSideMenu.js";
import UserSettingsMenu from "./components/UserSettingsMenu/UserSettingsMenu.js";
import SignUpPage from "./components/SignUpPage/SignUpPage.js";
import BankAccountsContainer from "./components/BankAccountsContainer/BankAccountsContainer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // return (
  //   <div className="App">
  //     <AccountSideMenu />
  //     <main>
  //       <HeaderBar />
  //       {/* only one of the following below is uncommented */}
  //       <UserSettingsMenu />
  //       {/* <BankAccountsContainer /> */}
  //     </main>
  //     {/* comment out everything above before uncommenting the sign up page */}
  //     {/* <SignUpPage /> */}
  //   </div>
  // );
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<SignUpPage />} />
            <div>
              <HeaderBar />
              <Route path="/myaccount" exact element={<UserSettingsMenu />} />
            </div>
          </Routes>
        </Router>
        {/* <AccountSideMenu />
        <main>
          <HeaderBar />
          <Router>
            <Route path="/home" />
            <Route path="/myaccount" exact element={<UserSettingsMenu />} />
          </Router>
        </main> */}
      </div>
    </>
  );
}

export default App;
