import { useNavigate } from "react-router-dom";

import FileSelect from "../../components/rogue/home/FileSelect";
import OptionBox from "../../components/rogue/home/OptionBox";
import { file } from "../../temp-helper";

export default function HomeMenu() {
    const navigate = useNavigate();

    return <div className="w-full h-[100vh] relative">
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
        <ul className="flex items-center justify-center flex-col gap-4 h-full bg-slate-900">
            <li className="relative">
                <span className="absolute top-1/2 -left-8 -translate-y-1/2 text-white font-bold">&lt;</span>
                <FileSelect file={file} func={() => {}} />
                <span className="absolute top-1/2 -right-8 -translate-y-1/2 text-white font-bold">&gt;</span>
            </li>
            <OptionBox option="New Game" func={() => {navigate("/rogue/new-game")}} />
            <OptionBox option="Tutorial" func={() => {navigate("/rogue/tutorial")}} />
            <OptionBox option="Bis Website" func={() => navigate("/")} />
        </ul>
        <img src="icons/logo.png" alt="bis logo" className="h-20 absolute bottom-6 right-6" />
    </div>
}