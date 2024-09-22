import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = ({darkMode, setDarkMode}) => {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log(darkMode, document.documentElement.classList);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? (
                <FaSun className="w-4 h-4 text-yellow-300" />
            ) : (
                <FaMoon className="w-4 h-4 text-gray-800" />
            )}
        </button>
    );
};

export default ThemeButton;