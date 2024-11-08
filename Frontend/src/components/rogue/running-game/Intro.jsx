export default function Intro({ setDepth, villan, introTxt }) {
    return <div className="flex flex-col justify-center items-center h-full relative">
        <div className="absolute bg-slate-700 text-white top-0 left-0 p-10">
            <p> name: {villan.getName()}</p>
            <p> HP: {villan.getHp()} </p>
            <p> crime: {villan.getDescription()}</p>
            <p> threat level: {villan.getDifficulty()}</p>
            <p> nature: {villan.getNatureName()} {villan.getNatureDesc()} </p>
        </div>
        <img src={`/2dGame/villans/profile/${villan.getImg()}.png`} alt="" />
        <p className="bg-slate-700 text-white p-8">
            {introTxt}
        </p>
        <button onClick={() => setDepth(2)} className="mt-10 bg-gray-400 p-2 w-24 cursor-pointer">start</button>
    </div>
}