import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { serverUrl, email } from "../../temp-helper";

export default function RogueGame() {
    // const [playerData, setPlayerData] = useState({});
    // const [level, setLevel] = useState(0);
    const [page, setPage] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        const getGameFile = async () => {
            const responce = await axios.get(`${serverUrl}/2d/file/${gameId}?email=${email}`);
            setPage(responce.data);
        }
        getGameFile();
    }, [gameId]);
    return <div className="bg-white dark:bg-slate-900">
        <h1 className="flex justify-between p-8 text-3xl bold">
            player name: {page.name}
        </h1>
    </div>;
}