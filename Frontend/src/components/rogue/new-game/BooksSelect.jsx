import { useEffect, useState } from "react";
import { startBookAmt } from "../../../data/rogue-data";
import Book from "../items/Book";
import BookModel from "../../../classes/rogue/Book";
import IS from "../../../classes/rogue/IS";
import { serverUrl } from "../../../temp-helper";
import axios from "axios";
import { email } from "../../../temp-helper";

export default function BooksSelect({ setDepth, setPlayerInfo, playerInfo }) {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const difficulty = playerInfo.difficulty;

    useEffect(() => {
        const getBooks = async () => {
            const responce = await axios.get(`${serverUrl}/standards-list`)
            console.log('asked for books')
            setBooks(responce.data.map(d => new BookModel(d.name, [new IS(d.id, d.name, d.content)], 0, false)));
        }

        const getDiscoveredBooks = async () => {
            const responce = await axios.get(`${serverUrl}/2d/books?email=${email}`)
            console.log('asked for books')
            setBooks(responce.data.map(d => new BookModel(d.name, d.content, d.rarity, true)));
        }

        getBooks();
    }, [])

    const selectBook = (book) => {
        if (selectedBooks.includes(book)) {
            setSelectedBooks(selectedBooks.filter((b) => b !== book));
        } else if (book.discovered) {
            if (selectedBooks.length === startBookAmt[difficulty]) {
                return
            }
            setSelectedBooks([...selectedBooks, book]);
        }
    }

    const startGame = () => {
        if (selectedBooks.length < 1) {
            alert("Please select atleast 1 book");
            return
        }
        setPlayerInfo({...playerInfo, books: selectedBooks});
        setDepth(3);
    }

    return (
        <div className="h-full relative p-12 flex gap-8 flex-col">
            <h1 className="text-3xl font-bold text-white text-center">Select upto {startBookAmt[difficulty]} Books</h1>
            <div className="flex flex-row relative shadow-sm bg-gradient-to-br from-slate-700 to-slate-900 p-4 text-white rounded-lg">
                <h3 className="absolute bottom-full left-0 text-lg translate-y-1/2 px-4 flex justify-between w-full">
                    books selected ({selectedBooks.length}/{startBookAmt[difficulty]})
                    <button className="text-white cursor-pointer px-8 text-sm rounded-lg bg-gradient-to-br from-customRedDark to-customRedLight" onClick={startGame}>Start</button>
                </h3>
                <ul className="flex gap-8 items-center justify-center w-full">
                    {
                        selectedBooks.length===0 && <li> -- none -- </li>
                    }
                    {
                        selectedBooks.map((book, index) => <li className="text-white" onClick={() => setSelectedBooks(selectedBooks.filter((b) => b !== book))}>
                            <Book book={book} key={index} />
                        </li>)
                    }
                </ul>
            </div>
            <ul className={"flex flex-wrap gap-4 p-4 w-full "+(selectedBooks.length === startBookAmt[difficulty] ? "opacity-45" : "opacity-100")}>
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