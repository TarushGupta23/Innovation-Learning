import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PlayerData from "../../components/rogue/new-game/PlayerData";
import BooksSelect from "../../components/rogue/new-game/BooksSelect";
import Uploading from "../../components/rogue/new-game/Uploading";
import { Player } from "../../classes/rogue/Player";
import { email, serverUrl } from "../../temp-helper";

export default function NewGame() {
    const navigate = useNavigate();
    const [depth, setDepth] = useState(0)
    const [playerInfo, setPlayerInfo] = useState({
        name: "",
        difficulty: 0,
        nature: 0,
        books: []
    })
    const [error, setError] = useState(false);

    const uploadData = async () => {
        const player = new Player(playerInfo.name, playerInfo.nature, playerInfo.books);
        console.log(playerInfo.books)
        console.log(player)

        const responce = await axios.post(`${serverUrl}/2d/file`, {
            email, file: {
                level: 0,
                difficulty: playerInfo.difficulty,
                name: playerInfo.name,
                nature: playerInfo.nature,
                IVs: player.IVs,
                books: player.books.map(book => ({
                    name: book.name, standards: book.standards.map(standard => standard.id), rarity: book.rarity, effects: book.effects.map(effect => effect.id)
                })),
                items: player.items,
                money: player.money,
                effects: player.effects,
            }
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        if (responce.data.error) {
            setError(true);
        } else {
            navigate('/rogue/game/' + responce.data.id);
        }
    }

    const renderPage = () => {
        switch (depth) {
            case 0:
                return <PlayerData setDepth={setDepth} setPlayerInfo={setPlayerInfo} />
            case 1:
                return <BooksSelect setDepth={setDepth} setPlayerInfo={setPlayerInfo} playerInfo={playerInfo} />;
            case 2:
                uploadData();
                return <Uploading error={error} />
            default: 
                return <PlayerData setDepth={setDepth} setPlayerInfo={setPlayerInfo} />
        }
    }
    return <div className="w-full h-[100vh] relative bg-slate-900">
        <div className="relative isolate pointer-events-none top-1/2">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-customBlue to-customRed opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 -z-10"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-customRed to-customBlue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
        {renderPage()}
        <img src="/icons/logo.png" alt="bis logo" className="h-20 absolute bottom-6 right-6" />
    </div>
}