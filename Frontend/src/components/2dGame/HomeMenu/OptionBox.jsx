export default function OptionBox({option, func}) {
    return (
        <li className="relative px-20 py-5 bg-gradient-to-r overflow-hidden from-slate-700 to-slate-900 rounded-xl shadow-md cursor-pointer group" onClick={func}>
            <div className="absolute bg-customBlueLight blur-3xl h-full w-1/2 left-full top-0 translate-x-full group-hover:-translate-x-full transition-all duration-100" />
            <h1 className="w-96 text-center text-2xl font-bold text-white">{option}</h1>
        </li>
    )
}