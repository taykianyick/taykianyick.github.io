import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Portfolio/>
    </>
  );
}

export default App;
