import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RogueGame from "./pages/2dExperience/RogueGame";
import GameExperience from "./pages/3dGameExperience/GameExperience";
import NewGame from "./pages/2dExperience/NewGame";
import GameSettings from "./pages/2dExperience/GameSettings";
import Login from "./pages/Home/Login";
import Testing from "./pages/testing";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
                <Route path="/login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
                
                <Route path="/rogue" element={<RogueGame />} />
                <Route path="/rogue/new-game" element={<NewGame />} />
                <Route path="/rogue/settings" element={<GameSettings />} />
                <Route path="/3d" element={<GameExperience />} />
            </Routes>
        </Router>
    );
}

export default App;