import GameCard from "./GameCard";

export default function Games() {
    return <section className="relative z-50">
        <div className="relative isolate px-6 py-20 lg:px-8">
            <div className="flex relative m-14 items-center justify-between flex-col gap-10">
                <div className="flex flex-col gap-8 dark:text-slate-300 text-gray-600">
                    <div>
                        <h1 className="text-3xl font-bold dark:text-slate-100 text-gray-900">Start Playing</h1>
                        <p className="text-justify my-2">
                            At BIS, we believe learning about standards doesn't have to be boring! Dive into our fun and interactive games that will not only challenge your knowledge but also educate you on the importance of standards in a playful way.
                        </p>
                    </div>
                </div>

                <div className="w-full relative flex bg-red-300 gap-4 justify-center">
                    <GameCard name="ISO Raider" content="Immerse yourself in a virtual 3D environment where you explore different industries and uncover the role that BIS standards play in maintaining quality and safety. Solve puzzles and challenges to progress through various levels!" />
                    <GameCard name="Rogue Adventure" content="Join our detective in a thrilling adventure where BIS Standards are your best weapon against criminals! As you progress through the levels, apply the right standards to defeat your enemies and win rewards." />
                    <GameCard name="Quizzes" content="Sharpen your understanding of Indian standards with our engaging quizzes. Each quiz is designed to test your knowledge of various products and services, ensuring you are aware of the importance of standards in everyday life." />
                </div>
            </div>
        </div>
    </section>
}