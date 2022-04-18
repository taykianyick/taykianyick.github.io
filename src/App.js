import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Aboutme from "./components/Aboutme";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'tw-elements';


function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Portfolio/>
      <Aboutme/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
