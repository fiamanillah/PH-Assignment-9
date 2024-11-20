import { Link, useNavigate } from 'react-router-dom'
import Section from './Section'
import Button from '../components/Button'
import MainNavBar from '../components/MainNavBar'
import DarkModeSwitch from '../components/DarkModeSwitch'
import useDarkMode from '../hooks/useDarkMode'
import { useAuth } from '../context/AuthContext'
import { LiaSpinnerSolid } from 'react-icons/lia'
import Tooltip from '../components/Tooltip'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'

function Header() {
    const { darkMode } = useDarkMode()
    const { user, loading, logout } = useAuth()
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
        navigate('/login')
    }
    return (
        <Section className={'bg-lightCard dark:bg-darkCard'}>
            <div className="flex items-center justify-between w-full py-1">
                <div className="flex items-center">
                    <Link to={'/'}>
                        {darkMode ? (
                            <img
                                className="h-16 mobile-sm:h-10"
                                src="/CareerCraft_White.svg"
                                alt=""
                            />
                        ) : (
                            <img
                                className="h-16 mobile-sm:h-10"
                                src="/CareerCraft_Accent.svg"
                                alt=""
                            />
                        )}
                    </Link>
                    <div
                        className={`flex items-center laptop-xl:fixed laptop-xl:bg-lightCardSecondary laptop-xl:dark:bg-darkCardSecondary laptop-xl:w-1/2 mobile-lg:w-2/3 laptop-xl:inset-y-0 z-20 laptop-xl:flex-col laptop-xl:rounded-l-xl laptop-xl:overflow-hidden laptop-xl:p-3 laptop-xl:mt-20 mobile-sm:mt-16 duration-200  ${
                            showNav ? 'laptop-xl:right-0' : 'laptop-xl:-right-full'
                        }`}
                    >
                        <MainNavBar />
                        {user && (
                            <Button
                                className="bg-accent text-darkPrimary laptop-xl:w-full laptop-xl:bg-red-500 laptop-xl:hover:scale-100 laptop-xl:active:scale-100"
                                onClick={handleLogOut}
                            >
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

                    <button
                        onClick={() => {
                            showNav ? setShowNav(false) : setShowNav(true)
                        }}
                        className="hidden laptop-xl:flex items-center justify-center text-xl w-10 h-10 rounded-full focus:outline-none transition-colors duration-300 
               bg-lightCard dark:bg-darkCard border-2  dark:border-darkPrimary  dark:text-darkPrimaryText"
                    >
                        {showNav ? <RxCross2 /> : <CiMenuFries />}
                    </button>
                </div>
            </div>
        </Section>
    )
}

export default Header
