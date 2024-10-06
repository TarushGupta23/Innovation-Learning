export default function PlayerInput() {
    return <section className="flex flex-col gap-12 bg-gradient-to-b from-slate-900 to-slate-400 h-[100vh] px-14 py-20 items-center justify-center">
        <h1 className="text-5xl font-bold text-white"> Start New Journey!! </h1>
        <form className="flex flex-col gap-4 bg-gradient-to-b from-customBlueLight to-customBlueDark text-white rounded-xl px-10 py-8 text-lg w-[40rem]">
            <div>
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" name="name" className="w-full bg-customBlue rounded-lg px-4 py-2 border-solid border-[1px] border-white outline-none focus:bg-customBlueDark"/>
            </div>

            <div>
                <label htmlFor="difficulty">Difficulty: </label>
                <div class="inline-flex space-x-2 w-full">
                    <label className="flex-1">
                        <input type="radio" name="difficulty" value="easy" class="sr-only" />
                        <div class="px-4 py-2 bg-green-300 hover:bg-green-500 text-gray-700 font-semibold rounded-l-lg cursor-pointer focus:outline-none">
                        Easy
                        </div>
                    </label>
                    <label className="flex-1">
                        <input type="radio" name="difficulty" value="medium" class="sr-only" />
                        <div class="px-4 py-2 bg-yellow-200 hover:bg-yellow-400 text-gray-700 font-semibold cursor-pointer focus:outline-none">
                        Medium
                        </div>
                    </label>
                    <label className="flex-1">
                        <input type="radio" name="difficulty" value="hard" class="sr-only" />
                        <div class="px-4 py-2 bg-red-300 hover:bg-red-500 text-gray-700 font-semibold rounded-r-lg cursor-pointer focus:outline-none">
                        Hard
                        </div>
                    </label>
                </div>
            </div>
        </form>

        <button className="bg-gradient-to-b from-customRedLight to-customRedDark text-white text-xl py-2 px-4 rounded-lg w-[30rem] text-center">Next</button>
    </section>
}