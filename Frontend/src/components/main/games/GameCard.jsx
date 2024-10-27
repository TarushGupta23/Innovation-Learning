import { useNavigate } from "react-router-dom";

export default function GameCard({ name, content, img, dest = "/" }) {
    const navigate = useNavigate();
    return (
    <div 
    className="dark:text-white bg-gray-50 shadow-xl dark:bg-slate-800 rounded-xl p-8 relative z-0 hover:bg-gradient-to-bl dark:from-slate-900 dark:to-customBlueDark from-white to-customBlueLight group overflow-hidden" >
        <img 
            src={"gameCardBgrd/" + img} alt={name} 
            className="absolute h-full group-hover:md:h-1/2 -z-10 right-4 top-4 opacity-60 transition-all duration-100 group-hover:blur-[3px]" 
        />
        <h3 className="text-2xl group-hover:text-lg font-bold transition duration-100 flex lg:items-center justify-between flex-col lg:flex-row">
            {name}
            <button onClick={() => navigate(dest)} className="bg-slate-800 text-white cursor-pointer px-3 py-1 text-xs rounded-lg dark:bg-white dark:text-slate-900">Play</button>
        </h3>
        <p className="text-xs translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-100 select-none">{content}</p>
    </div>
    )
}