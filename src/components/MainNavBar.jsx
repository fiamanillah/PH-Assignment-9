import { NavLink } from 'react-router-dom'

function MainNavBar() {
    return (
        <ul className="flex gap-3 not-prose text-primary font-medium laptop-xl:flex-col laptop-xl:w-full">
            <li className=" duration-200 laptop-xl:w-full laptop-xl:rounded-lg laptop-xl:overflow-hidden laptop-xl:font-bold">
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        `py-2 px-4  rounded-full laptop-xl:rounded-none laptop-xl:w-full laptop-xl:block  ${
                            isActive
                                ? 'bg-accent text-white'
                                : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>

            <li className=" duration-200 laptop-xl:w-full laptop-xl:rounded-lg laptop-xl:overflow-hidden laptop-xl:font-bold">
                <NavLink
                    to={'/career-tips'}
                    className={({ isActive }) =>
                        `py-2 px-4  rounded-full laptop-xl:rounded-none laptop-xl:w-full laptop-xl:block  ${
                            isActive
                                ? 'bg-accent text-white'
                                : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                        }`
                    }
                >
                    Career Tips
                </NavLink>
            </li>
            <li className=" duration-200 laptop-xl:w-full laptop-xl:rounded-lg laptop-xl:overflow-hidden laptop-xl:font-bold">
                <NavLink
                    to={'/contact'}
                    className={({ isActive }) =>
                        `py-2 px-4  rounded-full laptop-xl:rounded-none laptop-xl:w-full laptop-xl:block  ${
                            isActive
                                ? 'bg-accent text-white'
                                : 'text-lightPrimaryText  dark:text-darkPrimaryText '
                        }`
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </ul>
    )
}

export default MainNavBar
