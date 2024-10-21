import { useState } from "react";
import { books } from "../../../Classes/Rogue/SampleData";
import { startBookAmt } from "../../../Classes/Rogue/Util";
import Book from "../Items/Book";

export default function BooksSelect({difficulty = 1}) {
    const [selectedBooks, setSelectedBooks] = useState([]);
    const selectBook = (book) => {
        if (selectedBooks.includes(book)) {
            setSelectedBooks(selectedBooks.filter((b) => b.name !== book.name));
        } else if (book.discovered) {
            if (selectedBooks.length < startBookAmt[difficulty]) {
                // display an error message

            }
            setSelectedBooks([...selectedBooks, book]);
        }
    }
    return (
        <div className="h-full relative p-12 flex gap-8 flex-col">
            <h1 className="text-3xl font-bold text-white text-center ">Select upto {startBookAmt[difficulty]} Books</h1>
            <div className="flex flex-row relative shadow-sm bg-gradient-to-br from-slate-700 to-slate-900 p-4 text-white rounded-lg">
                <h3 className="absolute bottom-full text-lg translate-y-1/2 left-4">books selected</h3>
                <ul className="flex gap-8 items-center justify-center w-full">
                    {
                        selectedBooks.map((book, index) => <Book book={book} key={index} />)
                    }
                </ul>
            </div>
            <ul className="flex flex-wrap gap-4 p-4 w-full">
                {
                    books.map((book, index) => (
                        <li className={"text-white flex align-center justify-center w-24 "+(book.discovered ? "cursor-pointer" : "cursor-not-allowed")} onClick={() => selectBook(book)}>
                            <Book book={book} key={index} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}