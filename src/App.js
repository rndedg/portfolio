import "./App.css";
import { useLayoutEffect } from "react";
import Welcome from "./components/Welcome/Welcome.js";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header"


function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#c3ccdb";
  }, []);

  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </>

  );
}

export default App;
