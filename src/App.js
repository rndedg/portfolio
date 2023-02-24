import "./App.css";
import { useLayoutEffect } from "react";
import Welcome from "./components/Welcome/Welcome.js";
import { Route, Routes } from "react-router";
import Error from "./components/Error/Error";

function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#c3ccdb";
  });

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}></Route>
      <Route path="*" element={<Error />}></Route>{" "}
    </Routes>
  );
}

export default App;
