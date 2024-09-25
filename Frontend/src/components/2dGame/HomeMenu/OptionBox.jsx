export default function OptionBox({option, func}) {
    return (
        <li className="px-20 py-5 bg-gradient-to-b from-customBlueLight to-customBlueDark rounded-xl shadow-md cursor-pointer" onClick={func}>
            <h1 className="w-96 text-center text-2xl font-bold text-white">{option}</h1>
        </li>
    )
}