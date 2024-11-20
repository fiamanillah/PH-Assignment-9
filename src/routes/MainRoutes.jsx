import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import PrivateRoute from '../components/PrivateRoute'
import ForgotPassword from '../pages/ForgotPassword'
import UserProfile from '../pages/UserProfile'
import ServiceDetails from '../pages/ServiceDetails'
import TestimonialPage from '../pages/TestimonialPage'
import Contact from '../pages/Contact'
import CareerTips from '../pages/CareerTips'

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
                path: '/testimonials',
                element: <TestimonialPage />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: 'career-tips',
                element: (
                    <PrivateRoute>
                        <CareerTips />
                    </PrivateRoute>
                ),
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
