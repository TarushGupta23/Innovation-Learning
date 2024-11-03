import { useEffect, useState } from "react";
import Book from "../items/Book";

export default function Battle({setDepth, villan, game}) {
    const [userMenu, setUserMenu] = useState(0) // 0 => attack, bag, cheatCode btns | 1 => select book for attacking | 3 => dialog / villan is attacking
    
    console.log('----game updated----')
    console.log(villan, game.player);
    
    const inputCheats = () => {
        const input = prompt('Enter Cheat Code', '');
        console.log(input, 'was the cheat code');
    }

    const villanAttack = () => {
        const isCrit = game.dealDamageToPlayer(villan);
        // use isCrit to display if the attack was a crit
        if (game.player.isDead()) {
            // end game !!
        }
    }

    const playerAttack = (idx) => {
        const selectedBook = game.player.books[idx];
        console.log(selectedBook);
        const isCrit = game.dealDamageToVillan(selectedBook, villan);
        // use isCrit to display if the attack was a crit

        if (villan.isDead()) {
            // display some text
            return setDepth(3);
        }
    }

    useEffect(() => {
        // check if villan is faster or not
        if (villan.stats[3] > game.player.getStats(game.level)[3]) {
            villanAttack()
        }
    }, [])
    
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
                    <li onClick={() => setUserMenu(playerAttack(index))} key={index} >
                        <Book book={book} />
                    </li>
                ))}
            </ul>
        }
    </div>
}