import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
