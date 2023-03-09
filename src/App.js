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
  });
  

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="/About me" element={<About />}></Route>
      <Route path="/Projects" element={<Projects />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
