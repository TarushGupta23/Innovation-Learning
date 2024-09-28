import axios from 'axios'
import { useEffect } from 'react';
import Game from '../../components/3dGame/Game'
import './style.css'

// const API_URL = "http://127.0.0.1:1234/v1/chat/completions";
const API_URL = "http://127.0.0.1:1234/v1/chat/"; // unsupported

let content = 'Start'
const AIbody = {
    model: "lmstudio-community/Meta-Llama-3.1-8B-Instruct-GGUF/Meta-Llama-3.1-8B-Instruct-Q4_K_M.gguf",
    messages: [
        { role: "user", content }
    ],
    temperature: 0.7,
    max_tokens: -1,
    stream: false
}

const msg = "**Case File: \"The Missing Standard\"**\n\nYou are Detective Vikram, a seasoned investigator with the Bureau of Indian Standards (BIS) headquarters. You've been working on a high-profile case involving a critical standard that could impact India's economy and international relations.\n\nAs you sit in your office, surrounded by files and reports, you receive a visit from your trusted assistant, Rohan.\n\n\"Detective Vikram, I have some information for you,\" Rohan says, his voice low and urgent. \"We've been monitoring some unusual activity at the BIS headquarters. It seems someone has been accessing sensitive data on the standard in question.\"\n\nYou lean forward, intrigued. \"Who's been accessing it? And what kind of data?\"\n\nRohan hesitates before responding. \"Well, let's just say that someone has been trying to hack into our database. But here's the thing, Detective Vikram - we can't confirm who or why they're doing this.\"\n\nYou nod thoughtfully, making a mental note to investigate further.\n\nSuddenly, Rasheek, a skilled engineer from BIS, enters your office. \"I've been reviewing some data on the standard in question,\" he says, his eyes scanning the room. \"It appears that our previous tests have revealed some... discrepancies.\"\n\nYou lean forward, interested. \"Discrepancies? What kind of discrepancies?\"\n\nRasheek hesitates before responding. \"Well, it seems that there are some inconsistencies in the testing protocols we've used so far. It's almost as if someone has been manipulating the data to get their desired results.\"\n\nDr. Ram, a renowned scientist from BIS, enters your office next. \"I've been analyzing the standard's specifications,\" he says, his eyes shining with excitement. \"It appears that there are some anomalies in the material properties we're expecting.\"\n\nYou raise an eyebrow, intrigued by Dr. Ram's words.\n\nTarush, a determined journalist from the press corps, bursts into your office. \"Detective Vikram, I've been investigating some rumors about this case,\" she says, her voice low and urgent. \"I think there might be more to it than just standard-setting.\"\n\nGovind, a government official involved in the investigation, enters your office next. \"I'm afraid we have some bad news, Detective Vikram,\" he says, his expression somber. \"It appears that someone on our team has been compromised. They're not who they said they were.\"\n\nYou take a deep breath, processing this new information.\n\n**Decision Options:**\n\nA) Question Rasheek further about the discrepancies in the testing protocols\nB) Investigate Dr. Ram's anomalies in material properties\nC) Follow up with Tarush on her journalist's tip\nD) Speak with Govind about his compromised team member\nE) Review your notes to see if you can find any connections between the compromising officer and the missing standard"

function convertMessageToArray(message) {
    const lines = message.split('\n\n');
    const result = [];
    
    lines.forEach(line => {
        const match = line.match(/^(.*?),\s+([^,]+):\s+"(.*?)"/);
        if (match) {
            const name = match[1].trim();
            const dialog = match[3].trim();
            result.push({ name, dialog });
        }
    });

    return result;
}

export default function GameExperience() {
    const getGameBaseData = async () => {
        try {
            const response = await axios.post(API_URL, AIbody, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('responce: ', response)
        } catch (error) {
            console.log('error', error.message);
        }
    }

    useEffect(() => {
        getGameBaseData();
        const res = convertMessageToArray(msg)
        console.log(res)
    }, []);


    return <section id="game-container-3d">
        <div className="wrapper">
            <div className="canvas-container">
                <Game />
            </div>
            
            <div className="dialog-container">
                <h2 className="dialog-by">Tarush</h2>
                <p className="dialog">
                    Hlo
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