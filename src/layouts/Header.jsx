import { Link } from 'react-router-dom'
import Section from './Section'
import Button from '../components/Button'
import MainNavBar from '../components/MainNavBar'
import DarkModeSwitch from '../components/DarkModeSwitch'
import useDarkMode from '../hooks/useDarkMode'
import { useAuth } from '../context/AuthContext'
import { LiaSpinnerSolid } from 'react-icons/lia'

function Header() {
    const { darkMode } = useDarkMode()
    const { user, loading } = useAuth()
    return (
        <Section className={' shadow-lg shadow-white'}>
            <div className="flex items-center justify-between w-full py-1">
                <div className="flex items-center">
                    <Link to={'/'}>
                        {darkMode ? (
                            <img className="h-16" src="/CareerCraft_White.svg" alt="" />
                        ) : (
                            <img className="h-16" src="/CareerCraft_Accent.svg" alt="" />
                        )}
                    </Link>
                    <MainNavBar />
                </div>
                <div className="flex items-center gap-2">
                    {loading ? (
                        <LiaSpinnerSolid className="animate-spin text-3xl" />
                    ) : user ? (
                        <button className="w-10 rounded-full overflow-hidden">
                            <img src={user?.photoURL} alt="" />
                        </button>
                    ) : (
                        <Link to={'/login'}>
                            <Button className="bg-accent text-darkPrimary">Log in</Button>
                        </Link>
                    )}

                    <DarkModeSwitch />
                </div>
            </div>
        </Section>
    )
}

export default Header
