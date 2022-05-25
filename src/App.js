import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import "./App.css";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  function toggleLightMode() {
    setLightMode((prevState) => !prevState);
  }
  
  return (
    <>
      <NavBar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Main lightMode={lightMode} />
    </>
  );
}
