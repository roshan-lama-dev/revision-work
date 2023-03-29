import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Hotel } from "./pages/hotels/Hotel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
