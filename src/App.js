import "./App.css";
import Navbar from "./components/Navbar/navbar.js";
import Welcome from "./components/welcome/welcome";
import Team from "./components/team/team.js";
import Faq from "./components/faq/faq";
import Roadmap from "./components/roadmap/roadmap";
import About from "./components/aboutus/aboutus";
import Footer from "./components/footer/footer";
import Community from "./components/community/community";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Roadmap />
      <Community />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
