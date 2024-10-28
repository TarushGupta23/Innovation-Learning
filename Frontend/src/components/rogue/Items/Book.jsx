export default function Book({ book }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={"/2dGame/books/book-" + book.rarity + ".png"} alt="book icon" />
            <h4>{book.name}</h4>
        </div>
    )
}