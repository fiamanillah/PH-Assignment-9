import { MdOutlineDarkMode } from 'react-icons/md'
import { IoIosSunny } from 'react-icons/io'
import useDarkMode from '../hooks/useDarkMode'

const DarkModeSwitch = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()

    return (
        <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center text-xl w-10 h-10 rounded-full focus:outline-none transition-colors duration-300 
               bg-lightCard dark:bg-darkCard border-2 border-yellow-500 dark:border-darkPrimary  text-yellow-500 dark:text-darkPrimaryText"
            aria-label="Toggle Dark Mode"
        >
            {darkMode ? <MdOutlineDarkMode /> : <IoIosSunny />}
        </button>
    )
}

export default DarkModeSwitch
