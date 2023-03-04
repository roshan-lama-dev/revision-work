import "./App.css";
// import { Button } from "react-bootstrap";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Register from "./pages/register/Register";
import { EmailVerify } from "./pages/verify/EmailVerify";
import Dashbaord from "./pages/dashboard/Dashbaord";
import { MockWebiste } from "./praticeComponent/MockWebiste";

function App() {
  console.log(process.env.REACT_APP_ROOT_API);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<EmailVerify />} />
          <Route path="/hcf" element={<MockWebiste />} />

          {/* private routes */}
          <Route path="/dashboard" element={<Dashbaord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
