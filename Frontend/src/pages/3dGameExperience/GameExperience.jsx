import Game from '../../components/3dGame/Game';
import './style.css';
import TypeWriter from '../../components/3dGame/TypeWriter';
import { useEffect } from 'react';
import { serverUrl } from '../..';
import axios from 'axios';

export default function GameExperience() {
    const fullText = "We have reason to believe that a vital standard for electrical appliances has gone missing from our archives. This standard is crucial for ensuring the safety and quality of these products in India. Our top priority is to find this missing standard before it falls into the wrong hands."

    useEffect(() => {
        const getInitialResp = async () => {
            const responce = await axios.post(`${serverUrl}/3d/generate`, {
                content : "hello", key: "tarush11"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(responce.data);
        }
        // getInitialResp();
    }, [])

    return (
        <section id="game-container-3d">
            <div className="wrapper">
                <div className="canvas-container">
                    <Game />
                </div>
                <div className="dialog-container">
                    <h2 className="dialog-by">Assistant</h2>
                    <TypeWriter text={fullText}/>
                </div>
            </div>
        </section>
    );
}