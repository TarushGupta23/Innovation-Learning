// name input
// books input
// level difficulty

import { useState } from "react";
import PlayerInput from "../../components/2dGame/NewGame/PlayerData";

export default function NewGame() {
    const [depth, setDepth] = useState(0)

    const renderPage = () => {
        switch (depth) {
            case 0:
                return <PlayerInput setDepth={setDepth} />
            case 1:
                return null;
        }
    }
    return renderPage();
}