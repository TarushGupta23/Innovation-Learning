import { gameItemList } from "../../../classes/rogue/Util";

export default function TutorialItems({ setPage }) {
    return <div className="flex flex-col gap-4 h-full bg-slate-900 text-white">
        <h1 className="flex justify-between p-8 text-3xl bold">
            Items 
            <button onClick={() => setPage('select')} className="bg-white text-slate-900 cursor-pointer px-8 py-1 text-xs rounded-lg"> 
                Back 
            </button>
        </h1>
        <div className="flex gap-4 p-8 flex-1">
            <ul className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg flex flex-col gap-6 overflow-scroll">
                { gameItemList.map((item, index) => (
                        <li key={index} className="bg-gradient-to-br from-slate-700 to-slate-900 py-2 px-6 rounded-lg">{item.name}</li>
                ))}
            </ul>
            <div></div>
        </div>
    </div>
}