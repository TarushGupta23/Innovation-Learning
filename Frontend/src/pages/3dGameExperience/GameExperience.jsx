import Game from '../../components/3dGame/Game';
import './style.css';
import TypeWriter from '../../components/3dGame/TypeWriter';

export default function GameExperience() {
    const fullText = "We have reason to believe that a vital standard for electrical appliances has gone missing from our archives. This standard is crucial for ensuring the safety and quality of these products in India. Our top priority is to find this missing standard before it falls into the wrong hands."

    return (
        <section id="game-container-3d">
            <div className="wrapper">
                <div className="canvas-container">
                    <Game />
                </div>
                <div className="dialog-container">
                    <h2 className="dialog-by">Assistant</h2>
                    <TypeWriter text={fullText}/>
                    {/* Optional: Game options section */}
                    {/* <div className="game-options">
                        <ul>
                            <li className="option">Option 1</li>
                            <li className="option">Option 2</li>
                            <li className="option">Option 3</li>
                            <li className="option">Option 4</li>
                            <li className="option">Option 5</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    );
}