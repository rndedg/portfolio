import './App.css';
import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router';
import Welcome from "./components/Welcome/Welcome.js";

function App() {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#E5E8ED";
  });

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Welcome />
        }></Route>
    </Routes>
  );
}

export default App;
