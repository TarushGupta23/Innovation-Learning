export default function Card({ text, title }) {
    return <li className="bg-white shadow-xl dark:shadow-gray-800 h-full w-full rounded-md p-8 flex flex-col gap-2 dark:bg-slate-900">
        <h3 className="text-xl font-semibold dark:text-slate-100 text-gray-900">{title}</h3>
        <p className="text-sm italic text-gray-600 dark:text-slate-400">
            {text}
        </p>
    </li>
}