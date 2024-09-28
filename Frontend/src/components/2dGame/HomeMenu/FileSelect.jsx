import { gameDifficultyNames } from "../../../Classes/Rogue/Util";

export default function FileSelect({file, func}) {
    return (
        <div className="cursor-pointer relative px-20 py-5 bg-gradient-to-b from-customRedLight to-customRedDark rounded-b-xl rounded-r-xl shadow-md text-white flex flex-col gap-2" onClick={func}>
            <span className="absolute top-0 left-0 bg-customRedDark -translate-y-full px-4 py-1 rounded-t-xl w-[98%] h-4"></span>
            <p className="absolute top-0 left-0 bg-customRedLight -translate-y-full px-4 py-1 rounded-t-xl w-1/4">
                <span>File Slot: {file.id}</span> 
            </p>
            <h2 className="w-96 font-bold text-4xl">
                {file.playerName}
            </h2>
            <p className="flex flex-col">
                <span>Level: {file.level}</span>
                <span>Books inhand: {file.books.length}</span>
                <span>Difficulty: {gameDifficultyNames[file.difficulty]}</span>
                <span>Last Saved: </span>
                <ul className="list-disc ps-6">
                    <li>{file.lastSaved.date}</li>
                    <li>{file.lastSaved.time}</li>
                </ul>
            </p>
        </div>
    )
}