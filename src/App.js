import "./App.css";
import MainPage from "./components/MainPage/MainPage.js";
import SignUpPage from "./components/SignUpPage/SignUpPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<SignUpPage />} />
            <Route path="/home" exact element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
