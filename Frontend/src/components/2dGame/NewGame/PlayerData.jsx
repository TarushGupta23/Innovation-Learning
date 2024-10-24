import { useState } from "react";
import { gameDifficultyNames, natures } from "../../../Classes/Rogue/Util";

export default function PlayerData({ setDepth, setPlayerInfo }) {
    const colorArr = ["bg-green-400", "bg-yellow-400", "bg-red-600"];
    const borderArr = ["rounded-l-2xl", "", "rounded-r-2xl"];

    const submitGame = () => {
        if (!pageInfo.name || pageInfo.name === "") {
            alert("Please enter a name");
            return
        };
        setPlayerInfo({...pageInfo, books: []});
        setDepth(1);
    };

    const [pageInfo, setPageInfo] = useState({
        name: '', 
        difficulty: 0,
        nature: 0
    });

    return <section className="flex items-center justify-center flex-col gap-4 h-full">
        <h1 className="text-5xl font-bold text-white"> Start New Journey!! </h1>
        <form className="flex flex-col gap-4 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-xl px-10 py-8 text-lg w-[40rem]">
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" id="name" name="name" 
                    className="w-full bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg px-4 py-2 border-solid border-[1px] border-white outline-none" 
                    value={pageInfo.name} 
                    onChange={(e) => setPageInfo({...pageInfo, name: e.target.value})}
                />
            </div>

            <div>
                <h2>Difficulty: </h2>
                <div class="inline-flex space-x-2 w-full">
                    {
                        gameDifficultyNames.map((difficulty, index) => (
                            <label className="flex-1 relative group" htmlFor={difficulty} key={difficulty} onClick={() => setPageInfo({...pageInfo, difficulty: index})}>
                                <div className={`px-4 py-2 bg-gradient-to-br from-slate-950 to-slate-900 font-semibold ${borderArr[index]} cursor-pointer focus:outline-none relative overflow-hidden capitalize`}>
                                    <input 
                                        id={difficulty} type="radio" name="difficulty" value={difficulty} 
                                        className="peer sr-only" checked={pageInfo.difficulty === index} 
                                    />
                                    {difficulty}
                                    <span className={`absolute w-1/2 h-full ${colorArr[index]} top-0 left-full group-hover:translate-x-2 group-hover:left-1/2 transition-all duration-200 translate-x-full blur-2xl peer-checked:left-1/2 peer-checked:translate-x-2`} />
                                </div>
                            </label>
                        ))
                    }
                </div>
            </div>

            <div>
                <h2 htmlFor="nature">Nature: </h2>
                <div class="w-full grid grid-cols-3 gap-2">
                    {
                        natures.map((nature, index) => {
                            return <div key={nature[3]} onClick={() => setPageInfo({...pageInfo, nature: index})}
                                className={`bg-gradient-to-br from-slate-950 ${pageInfo.nature===index?"to-blue-800":"to-blue-950"} py-1 px-4 rounded-lg group relative`}>
                                {nature[3]}
                                <div className="text-xs">{nature[4]}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </form>

        <button className="bg-gradient-to-br from-slate-700 to-slate-900 text-white text-xl py-2 px-4 rounded-lg w-[30rem] text-center" onClick={submitGame}>Next</button>
    </section>
}