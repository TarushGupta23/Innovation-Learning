import { gameDifficultyNames } from "../../../Classes/Rogue/Util";

export default function FileSelect({file, func}) {
    return (
        <div className="cursor-pointer relative px-20 py-5 bg-gradient-to-b from-customRedLight to-customRedDark rounded-b-xl rounded-r-xl shadow-md text-white flex flex-col gap-2" onClick={func}>
            <p className="absolute top-0 left-0 bg-customRedLight -translate-y-full px-4 py-1 rounded-t-xl flex gap-4">
                <span>File Slot: {file.id}</span> 
            </p>
            <h2 className="w-96 font-bold text-4xl">
                {file.playerName}
            </h2>
            <p className="font-bold flex flex-col">
                <span>Level: {file.level}</span>
                <span>Books inhand: {file.books.length}</span>
                <span>Difficulty: {gameDifficultyNames[file.difficulty]}</span>
            </p>
        </div>
    )
}