export default function Intro({ setDepth, villan }) {
    console.log(villan);
    return <div>
        hlo this is page for villan intro
        <button onClick={() => setDepth(2)}>start</button>
    </div>
}