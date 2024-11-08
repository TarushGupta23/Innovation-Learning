import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl, email } from "../../temp-helper";
import { Player } from "../../classes/rogue/Player";
import { gameItemList, gamePlayerEffectList, startLevel } from "../../data/rogue-data";
import BookModel from "../../classes/rogue/Book";
import IS from "../../classes/rogue/IS";
import Updating from "../../components/rogue/running-game/Updating";
import Intro from "../../components/rogue/running-game/Intro";
import Game from "../../classes/rogue/Game";
import Battle from "../../components/rogue/running-game/Battle";

export default function RogueGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();

    const [depth, setDepth] = useState(0);
    const [game, setGame] = useState(null);
    const [level, setLevel] = useState(-1);
    const [discoveredIS, setDiscoveredIS] = useState([]);
    const [villan, setVillan] = useState(null);
    const [introPage, setIntroPage] = useState({villanImg: '', introTxt: ''});

    const generateLevel = () => {
        setVillan(game.generateLevel());
        setIntroPage({
            introTxt: 'Hah! you thing i will let you through that easily!?? No way!!'
        })
        setDepth(1);
    }

    const renderPage = () => {
        switch (depth) {
            case 0:
                return <Updating />
            case 1:
                return <Intro setDepth={setDepth} villan={villan} {...introPage} />
            case 2:
                return <Battle setDepth={setDepth} villan={villan} game={game} setVillan={setVillan} setGame={setGame} />
            case 3:
                return // rewards
            default:
                return // shop
        }
    }

    useEffect(() => {
        const getDiscoveredIS = async () => {
            const responce = await axios.get(`${serverUrl}/2d/discovered-is?email=${email}`);
            setDiscoveredIS(responce.data.map(e => new IS(e._id, e.name, e.content)));

            getGameFile();
        }

        const getGameFile = async () => {
            const data = (await axios.get(`${serverUrl}/2d/file/${gameId}?email=${email}`)).data;
            if (data.error) {
                navigate('/rogue');
                alert('unable to load data');
            }
            
            let playerItems = data.items.map(itemId => gameItemList[itemId]);
            let playerBooks = data.books.map(book => {
                return new BookModel(book.name, book.standards, book.rarity, book.effects);
            });
            let playerEffects = data.effects.map(effectId => gamePlayerEffectList[effectId]);

            setGame( new Game(new Player(data.name, data.nature, playerBooks, data.IVs, playerItems, data.money, playerEffects), data.level, data.difficulty) );
            setLevel(data.level);
        }

        getDiscoveredIS();
    }, [gameId]);

    useEffect(() => {
        (level >= startLevel) && generateLevel()
    }, [level]);

    return <div className="w-[100vw] h-[100vh]">
        { renderPage() }
    </div>
}