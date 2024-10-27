import GameCard from "./GameCard";

export default function Games() {
    return <section className="relative z-50 min-h-[100vh]">
        <div className="relative isolate px-2 py-8 lg:py-20 lg:px-8">
            <div className="flex relative m-14 items-center justify-between flex-col gap-10">
                <div className="flex flex-col gap-8 dark:text-slate-300 text-gray-600">
                    <div>
                        <h1 className="text-3xl font-bold dark:text-slate-100 text-gray-900">Start Playing</h1>
                        <p className="text-justify my-2">
                            At BIS, we believe learning about standards doesn't have to be boring! Dive into our fun and interactive games that will not only challenge your knowledge but also educate you on the importance of standards in a playful way.
                        </p>
                    </div>
                </div>

                <div className="w-full relative flex justify-center gap-4 md:flex-row flex-col">
                    <GameCard dest="/clueshade" img="quiz.png" name="ClueShade" content="Immerse yourself in a virtual 3D environment where you explore different industries and uncover the role that BIS standards play in maintaining quality and safety. Solve puzzles and challenges to progress through various levels!" />
                    <GameCard dest="/rogue" img="quiz.png" name="Rogue Adventure" content="Join our detective in a thrilling adventure where BIS Standards are your best weapon against criminals! As you progress through the levels, apply the right standards to defeat your enemies and win rewards."/>
                    <GameCard dest="/" img="quiz.png" name="Quizzes" content="Sharpen your understanding of Indian standards with our engaging quizzes. Each quiz is designed to test your knowledge of various products and services, ensuring you are aware of the importance of standards in everyday life." />
                </div>

                <div className="px-10 md:px-20 py-16 bg-gradient-to-l from-slate-950 to-customBlue dark:from-customBlueDark dark:to-slate-900 w-[100vw] flex flex-col gap-4 items-baseline relative overflow-hidden z-0">
                    <p className="text-white lg:w-2/3"> Love reading manga? Dive into the exciting world of BIS Adventures in a whole new way! Whether you're a fan of epic battles or curious about how standards shape the world around us, the BIS Adventures manga offers an immersive experience filled with unique challenges and fascinating storytelling.</p>
                    <button className="bg-white px-4 text-customBlueDark font-semibold cursor-pointer rounded-md" onClick={() => window.open(`docs/comic.pdf`, '_blank')}>read now</button>
                    <img src="bgrd/city-bgrd.jpg" alt="" className="absolute w-2/3 -z-10 opacity-35 top-1/2 right-0 -translate-y-1/2"/>
                </div>
            </div>
        </div>
    </section>
}