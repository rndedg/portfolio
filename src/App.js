import "./App.css";
import { useLayoutEffect } from "react";
import Welcome from "./components/Welcome/Welcome.js";
import { Route, Routes } from "react-router";
import Error from "./components/Error/Error";
import About from "./components/About/About";


function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#c3ccdb";
  });

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="/about" element={<About />}></Route>
      {/* <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route> */}
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
