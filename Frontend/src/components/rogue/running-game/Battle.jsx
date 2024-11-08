import { useEffect, useState } from "react";
import Book from "../items/Book";

export default function Battle({setDepth, villan, game, setVillan, setGame}) {
    const [userMenu, setUserMenu] = useState(2) // 0 => attack, bag, cheatCode btns | 1 => select book for attacking | 2 => dialog / villan is attacking
    const [currDialog, setCurrDialog] = useState('')

    const inputCheats = () => {
        const input = prompt('Enter Cheat Code', '');
        console.log(input, 'was the cheat code');
    }

    const villanAttack = () => {
        setCurrDialog('Villan Attacked!!')
        setUserMenu(2);
        const isCrit = game.dealDamageToPlayer(villan);
        setGame(game)
        if (isCrit) {
            setCurrDialog('Its a crit')
        }
        if (game.player.isDead()) {
            setCurrDialog('You Died')
            // return setDepth(3);
        }
    }

    const playerAttack = (idx) => {
        const selectedBook = game.player.books[idx];
        setCurrDialog('User used book!!')
        setUserMenu(2);
        const isCrit = game.dealDamageToVillan(selectedBook, villan);
        setVillan(villan)
        if (isCrit) {
            setCurrDialog('Its a crit')
        }
        if (villan.isDead()) {
            setCurrDialog('Villan Died')
            return setDepth(3);
        }
    }

    const playTurn = (idx) => { // turn is played
        if (game.playerFasterThan(villan)) { // check if player is faster
            playerAttack(idx)
            villanAttack()
        } else {
            villanAttack()
            playerAttack(idx)
        }
        setUserMenu(0)
    }

    const renderMenu = () => {
        switch (userMenu) {
            case 0: 
                return  <div className="flex gap-10">
                    <button onClick={() => setUserMenu(1)}>fight</button>
                    <button>bag</button>
                    <button onClick={inputCheats}>cheats</button>
                    <button>shop</button>
                </div>
            case 1: 
                return <ul className="flex gap-4">
                    {
                        game.player.books.map((book, index) => (
                            <li onClick={() => playTurn(index)} key={index} className="bg-green-200 cursor-pointer">
                                <Book book={book} />
                            </li>
                        ))
                    }
                    <li> <button onClick={() => setUserMenu(0)}>cancel</button> </li>
                </ul>
            default:
                return <div>{currDialog}</div>
        }
    }

    useEffect(() => {
        setUserMenu(0)
    }, [])
    
    return <div className="flex flex-col gap-4 h-full bg-red-100 p-10">
        <div className="flex items-center justify-end">
            <div className="flex flex-col bg-blue-300 gap-2 justify-start items-start">
                <div className={`relative bg-orange-500 h-4 transition-all delay-100 ease-in-out`} style={{width: Math.floor(villan.getHp()/villan.getMaxHP()*100)+"%" }}>
                    {/* <div className="absolute bg-red-500 w-full h-full top-0 left-0" /> */}
                </div>
                <img src={`/2dGame/villans/battle/${villan.getImg()}.png`} alt="villan battle icon" className="h-44 object-contain" />
                <p>
                    {villan.getHp()}/{villan.getMaxHP()} : {villan.getName()} : {villan.getDifficulty()}
                </p>
            </div>
        </div>
        
        <div className="flex items-center justify-start">
            <div className="flex flex-col bg-blue-300 gap-2 justify-start items-start">
                <div className={`relative bg-orange-500 h-4 transition-all delay-100 ease-in-out`} style={{width: Math.floor(game.player.getHp()/game.player.getMaxHP()*100)+"%" }}>
                    {/* <div className="absolute bg-red-500 w-full h-full top-0 left-0" /> */}
                </div>
                <img src={`/2dGame/villans/battle/${villan.getImg()}.png`} alt="villan battle icon" className="h-44 object-contain" />
                <p>
                    {game.player.getHp()}/{game.player.getMaxHP()} : {game.player.getName()}
                </p>
            </div>
        </div>

        <div className="p-10 bg-red-200">
            { renderMenu() }
        </div>
    </div>
}