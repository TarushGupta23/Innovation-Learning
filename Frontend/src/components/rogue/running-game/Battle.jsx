import { useState } from "react";
import Book from "../items/Book";

export default function Battle({setDepth, villan, game}) {
    const [userMenu, setUserMenu] = useState(0) // 0 => attack, bag, cheatCode btns | 1 => select book for attacking
    
    console.log('----game updated----')
    console.log(villan, game.player);
    
    const inputCheats = () => {
        const input = prompt('Enter Cheat Code', '');
        console.log(input, 'was the cheat code');
    }

    const selectAttackIS = (idx) => {
        const selectedBook = game.player.books[idx];
        console.log(selectedBook);
        game.dealDamage(selectedBook, villan);
    }
    
    return <div>
        {
            userMenu === 0 ? 
            <div className="flex gap-10">
                <button onClick={() => setUserMenu(1)}>fight</button>
                <button>bag</button>
                <button onClick={inputCheats}>cheats</button>
                <button>shop</button>
            </div>
            : <ul className="flex gap-4">
                {game.player.books.map((book, index) => (
                    <li onClick={() => setUserMenu(selectAttackIS(index))} key={index} >
                        <Book book={book} />
                    </li>
                ))}
            </ul>
        }
    </div>
}