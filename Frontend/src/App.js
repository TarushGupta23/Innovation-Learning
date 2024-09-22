import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}

export default App;
