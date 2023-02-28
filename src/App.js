import "./App.css";
import { useLayoutEffect } from "react";
import Welcome from "./components/Welcome/Welcome.js";
import { Route, Routes } from "react-router";
import Error from "./components/Error/Error";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#c3ccdb";
    document.body.style.backgroundImage = ""
    
  });

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
