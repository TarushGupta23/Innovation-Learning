import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl, email } from "../../temp-helper";
import { Player } from "../../classes/rogue/Player";
import { gameItemList, gamePlayerEffectList } from "../../data/rogue-data";
import BookModel from "../../classes/rogue/Book";
import IS from "../../classes/rogue/IS";
import Updating from "../../components/rogue/running-game/Updating";

export default function RogueGame() {
    const navigate = useNavigate();
    const { gameId } = useParams();

    const [depth, setDepth] = useState(0);
    const [player, setPlayer] = useState(new Player('', 0, []));
    const [game, setGame] = useState({ level: 0, difficulty: 0 });
    const [discoveredIS, setDiscoveredIS] = useState([]);

    const renderPage = () => {
        switch (depth) {
            case 0:
                return <Updating />
            case 1:
                return // villan intro
            case 2:
                return // fight
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

            setGame({
                level: data.level, difficulty: data.difficulty
            });
            setPlayer(new Player(data.name, data.nature, playerBooks, data.IVs, playerItems, data.money, playerEffects));
            setDepth(1);
        }

        getDiscoveredIS();
    }, [gameId]);

    return renderPage()
}