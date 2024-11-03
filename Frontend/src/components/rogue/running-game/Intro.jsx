import { criminalDifficultyNames } from "../../../data/rogue-data";

export default function Intro({ setDepth, villan, villanImg, introTxt }) {
    return <div className="flex flex-col justify-center items-center h-full relative">
        <div className="absolute bg-slate-700 text-white top-0 left-0 p-10">
            <p> name: {villan.name}</p>
            <p> HP: {villan.hp} </p>
            <p> crime: {villan.description}</p>
            <p> threat level: {criminalDifficultyNames[villan.levelDifficulty]}</p>
            <p> nature: {villan.nature[2]} {villan.nature[4]} </p>
        </div>
        <img src={`/2dGame/villans/profile/${villanImg}.png`} alt="" />
        <p className="bg-slate-700 text-white p-8">
            {introTxt}
        </p>
        <button onClick={() => setDepth(2)} className="mt-10 bg-gray-400 p-2 w-24 cursor-pointer">start</button>
    </div>
}