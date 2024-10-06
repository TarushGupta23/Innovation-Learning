import { useNavigate } from "react-router-dom";

import FileSelect from "../../components/2dGame/HomeMenu/FileSelect";
import OptionBox from "../../components/2dGame/HomeMenu/OptionBox";
import { file } from "../../Classes/Rogue/SampleData";

export default function Home() {
    const navigate = useNavigate();

    return <div className="w-full h-[100vh] relative">
        <ul className="flex items-center justify-center flex-col gap-4 h-full bg-gradient-to-b from-slate-900 to-slate-400">
            <li className="relative">
                <span className="absolute top-1/2 -left-8 -translate-y-1/2 text-white font-bold">&lt;</span>
                <FileSelect file={file} func={() => {}} />
                <span className="absolute top-1/2 -right-8 -translate-y-1/2 text-white font-bold">&gt;</span>
            </li>
            <OptionBox option="New Game" func={() => {navigate("/rogue/new-game")}} />
            <OptionBox option="Options" func={() => {}} />
            <OptionBox option="Bis Website" func={() => navigate("/")} />
        </ul>
        <img src="icons/logo.png" alt="bis logo" className="h-20 absolute bottom-6 right-6" />
    </div>
}