import About from "../../components/Home/AboutSection/About";
import Games from "../../components/Home/GameSection/Games";
import HeroSection from "../../components/Home/HeroSection/Hero";

export default function Home(props) {
    return <>
        <HeroSection {...props} />
        <About />
        <Games />
    </>
}