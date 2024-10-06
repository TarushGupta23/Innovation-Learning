export default function GameCard({ name, content }) {
    return <div className="dark:text-white bg-blue-200 rounded-full p-8">
        <h3 className="text-lg">{name}</h3>
        <p className="text-xs">{content}</p>
    </div>
}