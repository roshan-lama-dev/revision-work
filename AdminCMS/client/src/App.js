import "./App.css";
// import { Button } from "react-bootstrap";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Register from "./pages/register/Register";
import { EmailVerify } from "./pages/verify/EmailVerify";

function App() {
  console.log(process.env.REACT_APP_ROOT_API);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<EmailVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
