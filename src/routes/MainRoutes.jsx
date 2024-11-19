import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Page1 from '../pages/Page1'
import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import PrivateRoute from '../components/PrivateRoute'
import ForgotPassword from '../pages/ForgotPassword'
import UserProfile from '../pages/UserProfile'
import ServiceDetails from '../pages/ServiceDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'page1',
                element: (
                    <PrivateRoute>
                        <Page1 />
                    </PrivateRoute>
                ),
            },
            {
                path: 'login',
                element: <LogInPage />,
            },
            {
                path: 'register',
                element: <SignUpPage />,
            },
            {
                path: 'reset-password',
                element: <ForgotPassword />,
            },
            {
                path: 'user-profile',
                element: (
                    <PrivateRoute>
                        <UserProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: 'service-details/:serviceId',
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
            },
        ],
    },

    {
        path: '/404',
        element: <Error />,
    },
    {
        path: '*',
        element: <Error />,
    },
])

function MainRoutes() {
    return <RouterProvider router={router}></RouterProvider>
}

export default MainRoutes
