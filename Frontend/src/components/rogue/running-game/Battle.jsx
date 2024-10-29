export default function Battle({setDepth, villan, game}) {
    console.log('----game updated----')
    console.log(villan, game.player);
    const inputCheats = () => {
        const input = prompt('Enter Cheat Code', '');
    }
    return <div className="flex gap-10">
        <button>fight</button>
        <button>bag</button>
        <button onClick={inputCheats}>cheats</button>
        <button>shop</button>
    </div>;
}