import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export const aiUrl = 'http://192.168.22.112:1234'




// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import RogueGame from "./pages/2dExperience/RogueGame";
// import GameExperience from "./pages/3dGameExperience/GameExperience";
// import NewGame from "./pages/2dExperience/NewGame";
// import GameSettings from "./pages/2dExperience/GameSettings";
// import Login from "./pages/Home/Login";
// import Testing from "./pages/testing";

// function App() {
//     const [darkMode, setDarkMode] = useState(false);

//     return (
//         <div className="bg-red-50 w-80 h-40 p-10">
//             <Testing min={20} max={40} accuracy={2} units="%" />
//         </div>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
//                 <Route path="/login" element={<Login darkMode={darkMode} setDarkMode={setDarkMode} />} />
                
//                 <Route path="/rogue" element={<RogueGame />} />
//                 <Route path="/rogue/new-game" element={<NewGame />} />
//                 <Route path="/rogue/settings" element={<GameSettings />} />
//                 <Route path="/3d" element={<GameExperience />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;