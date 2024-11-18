import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Page1 from '../pages/Page1'
import Error from '../pages/Error'
import HomePage from '../pages/HomePage'
import LogInPage from '../pages/LogInPage'
import SignUpPage from '../pages/SignUpPage'
import PrivateRoute from '../components/PrivateRoute'

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
