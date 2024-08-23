import Game from '../../components/3dGame/Game'
import './style.css'

export default function GameExperience() {
    return <section id="game-container-3d">
        <div className="wrapper">
            <div className="canvas-container">
                <Game />
            </div>
            
            <div className="dialog-container">
                <h2 className="dialog-by">Assistant</h2>
                <p className="dialog">
                    Welcome to the Game! Dive into the experience as you explore and interact with our virtual world. Enjoy your adventure!
                </p>
                {/* <div className="game-options">
                    <ul>
                        <li className="option">lorem4</li>
                        <li className="option">lorem4</li>
                        <li className="option">lorem4</li>
                        <li className="option">lorem4</li>
                        <li className="option">lorem4</li>
                    </ul>
                </div> */}
            </div>

        </div>
    </section>
}