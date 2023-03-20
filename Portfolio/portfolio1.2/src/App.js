import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Testimonial } from "./components/testimonials/Testimonial";
import { Topbar } from "./components/topbar/Topbar";
import { Work } from "./components/work/Work";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
