import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { ServicePage } from "./pages/ServicePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
