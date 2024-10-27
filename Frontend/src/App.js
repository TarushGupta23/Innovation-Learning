import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import GameExperience from "./pages/clue-shade/GameExperience";
import NewGame from "./pages/rogue/NewGame";
import GameTutorial from "./pages/rogue/GameTutorial";
import Login from "./pages/main/Login";
import HomeMenu from "./pages/rogue/HomeMenu";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
                <Route path="/login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
                
                <Route path="/rogue" element={<HomeMenu />} />
                <Route path="/rogue/new-game" element={<NewGame />} />
                <Route path="/rogue/tutorial" element={<GameTutorial />} />
                
                <Route path="/clueshade" element={<GameExperience />} />
            </Routes>
        </Router>
    );
}

export default App;