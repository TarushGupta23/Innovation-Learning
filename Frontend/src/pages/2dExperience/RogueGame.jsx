import { useState } from "react";
import HomeMenu from "./HomeMenu";

export default function RogueGame() { // NOT BEING USD CURRENTLY
    const [gamePage, setGamePage] = useState(0);

    const renderGamePage = () => {
        switch (gamePage) {
            case 0:
                return <HomeMenu setGamePage={setGamePage} />
            case 1:
                return null;
        }
    }
    return renderGamePage();
}