import { useEffect, useState } from "react";
import { bookEffectList, generateInitialDiscoveredBooks, startBookAmt } from "../../../data/rogue-data";
import Book from "../items/Book";
import BookModel from "../../../classes/rogue/Book";
import { serverUrl } from "../../../temp-helper";
import axios from "axios";
import { email } from "../../../temp-helper";

export default function BooksSelect({ setDepth, setPlayerInfo, playerInfo }) {
    const [books, setBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);
    const difficulty = playerInfo.difficulty;

    useEffect(() => {
        const getDiscoveredBooks = async () => {
            const responce = await axios.get(`${serverUrl}/2d/books?email=${email}`)
            
            if (responce.data.length === 0) { // newly created player
                const responce2 = await axios.get(`${serverUrl}/standards-list`);
                const standardsList = responce2.data;
                const bookIdxs = generateInitialDiscoveredBooks(standardsList.length);
                let discoveredIS = [];
                let booksData = [];
                for (let i in bookIdxs) {
                    const book = standardsList[bookIdxs[i]];
                    discoveredIS.push(book.id);
                    booksData.push({
                        name: book.name, standards: [book.id], rarity: 0, effects: []
                    })
                }
                axios.post(`${serverUrl}/2d/books`, {
                    email, booksData, discoveredIS
                }, {
                    headers: { 'Content-Type': 'application/json' }
                })

                return booksData;
            }
            return responce.data;
        }
        
        const setBookList = async () => {
            const bookList = await getDiscoveredBooks();
            setBooks(bookList.map(d => {
                const effects = d.effects.map(e => bookEffectList[e]);
                return new BookModel(d.name, d.standards, d.rarity, effects);
            }));
        }

        setBookList()
    }, [])

    const selectBook = (book) => {
        if (selectedBooks.includes(book)) {
            setSelectedBooks(selectedBooks.filter((b) => b !== book));
        } else if (selectedBooks.length < startBookAmt[difficulty]) {
            setSelectedBooks([...selectedBooks, book]);
        }
    }

    const startGame = () => {
        if (selectedBooks.length < 1) {
            alert("Please select atleast 1 book");
            return
        }
        setPlayerInfo({...playerInfo, books: selectedBooks});
        setDepth(2);
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
                        selectedBooks.map((book, index) => <li key={index} className="text-white" onClick={() => setSelectedBooks(selectedBooks.filter((b) => b !== book))}>
                            <Book book={book} key={index} />
                        </li>)
                    }
                </ul>
            </div>
            <ul className={"flex flex-wrap gap-4 p-4 w-full "+(selectedBooks.length === startBookAmt[difficulty] ? "opacity-45" : "opacity-100")}>
                {
                    books.map((book, index) => (
                        <li className="text-white flex align-center justify-center w-24 cursor-pointer" onClick={() => selectBook(book)} key={index}>
                            <Book book={book} key={index} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}