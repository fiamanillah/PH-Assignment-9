import { Link } from 'react-router-dom'
import Section from './Section'
import Button from '../components/Button'
import MainNavBar from '../components/MainNavBar'
import DarkModeSwitch from '../components/DarkModeSwitch'
import useDarkMode from '../hooks/useDarkMode'
import { useAuth } from '../context/AuthContext'
import { LiaSpinnerSolid } from 'react-icons/lia'
import Tooltip from '../components/Tooltip'

function Header() {
    const { darkMode } = useDarkMode()
    const { user, loading, logout } = useAuth()

    const handleLogOut = () => {
        logout()
    }
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
                    <div className="flex items-center">
                        <MainNavBar />
                        {user && (
                            <Button className="bg-accent text-darkPrimary" onClick={handleLogOut}>
                                Log Out
                            </Button>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {loading ? (
                        <LiaSpinnerSolid className="animate-spin text-3xl text-primary dark:text-darkPrimary" />
                    ) : (
                        user && (
                            <Tooltip text={user?.displayName} position="bottom">
                                <button className="w-10 h-10 rounded-full overflow-hidden border-2">
                                    <Link to={'/user-profile'}>
                                        <img
                                            className="object-cover w-10 h-10"
                                            src={
                                                user?.photoURL ||
                                                'https://fi.amanillah.com/img/assignment-9/placeholder.png'
                                            }
                                            alt=""
                                        />
                                    </Link>
                                </button>
                            </Tooltip>
                        )
                    )}
                    {!user && (
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
