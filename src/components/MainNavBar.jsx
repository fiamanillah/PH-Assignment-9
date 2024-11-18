import { NavLink } from 'react-router-dom'

function MainNavBar() {
    return (
        <div>
            <ul className="flex gap-3 not-prose text-primary font-medium">
                <li className="hover:scale-105 active:scale-95 duration-200">
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                            `py-2 px-4  rounded-full  ${
                                isActive
                                    ? 'bg-accent text-white'
                                    : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="hover:scale-105 active:scale-95 duration-200">
                    <NavLink
                        to="/page1"
                        className={({ isActive }) =>
                            `py-2 px-4  rounded-full  ${
                                isActive
                                    ? 'bg-accent text-white'
                                    : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                            }`
                        }
                    >
                        Page 1
                    </NavLink>
                </li>

                <li className="hover:scale-105 active:scale-95 duration-200">
                    <NavLink
                        to={'/page2'}
                        className={({ isActive }) =>
                            `py-2 px-4  rounded-full  ${
                                isActive
                                    ? 'bg-accent text-white'
                                    : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                            }`
                        }
                    >
                        NavLink
                    </NavLink>
                </li>
                <li className="hover:scale-105 active:scale-95 duration-200">
                    <NavLink
                        to={'/page3'}
                        className={({ isActive }) =>
                            `py-2 px-4  rounded-full  ${
                                isActive
                                    ? 'bg-accent text-white'
                                    : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                            }`
                        }
                    >
                        NavLink
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainNavBar
