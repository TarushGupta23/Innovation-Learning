import { gameDifficultyNames } from "../../../data/rogue-data";

export default function FileSelect({file, index}) {
    return (
        <div className="cursor-pointer relative px-20 py-5 bg-gradient-to-br from-slate-700 to-slate-900 rounded-b-xl rounded-r-xl shadow-md text-white flex flex-col gap-2">
            <span className="absolute top-0 left-0 bg-slate-800 -translate-y-full px-4 py-1 rounded-t-xl w-[98%] h-4"></span>
            <p className="absolute top-0 left-0 bg-slate-700 -translate-y-full px-4 py-1 rounded-t-xl w-1/4">
                <span>File Slot: {index}</span> 
            </p>
            <h2 className="w-96 font-bold text-4xl">
                {file.name}
            </h2>
            <p className="flex flex-col">
                <span>Level: {file.level}</span>
                <span>Books inhand: {file.books.length}</span>
                <span>Difficulty: {gameDifficultyNames[file.difficulty]}</span>
            </p>
        </div>
    )
}