import About from "../../components/main/about/About";
import Footer from "../../components/main/footer/Footer";
import Games from "../../components/main/games/Games";
import HeroSection from "../../components/main/hero/Hero";
import Navbar from "../../components/main/hero/Navbar";

export default function Home(props) {
    return <div className="bg-white dark:bg-slate-900 relative z-0">
        <Navbar {...props} />
        <div className="relative isolate px-6 pt-14 lg:px-8 pointer-events-none">
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            'polygon(60% 0%, 100% 20%, 90% 50%, 100% 100%, 50% 100%, 20% 80%, 0% 50%, 20% 20%, 50% 10%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-customRed to-customBlue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
        <HeroSection />
        <div className="relative isolate pointer-events-none">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-customBlue to-customRed opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 -z-10"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-customRed to-customBlue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
        <About />
        <Games />
        <div className="relative pointer-events-none">
            <div aria-hidden="true" className="absolute inset-x-0 top-full -z-10 -translate-y-full overflow-hidden blur-3xl">
                
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-customBlue to-customRed opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(50% 98%, 90% 80%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 32% 42%, 100.2% 12.5%, 0.5% 7.7%, -20.1% 54.9%, 17.9% 100%)',
                    }} />
            </div>
        </div>
        <Footer />
    </div>
}