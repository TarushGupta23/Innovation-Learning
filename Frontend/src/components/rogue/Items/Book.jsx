export default function Book({ book }) {
    return (
        <div>
            {
                book.discovered? 
                <img src={"/2dGame/books/book-" + book.rarity + ".png"} alt="book icon" />
                : <img src="/2dGame/books/book-locked.png" alt="book icon" />
            }
            <h4>{book.name}</h4>
        </div>
    )
}