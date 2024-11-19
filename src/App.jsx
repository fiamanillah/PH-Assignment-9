import { useEffect } from 'react'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Header from './layouts/Header'

import { Outlet, useLocation } from 'react-router-dom'

function App() {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1))
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])
    return (
        <div className="prose max-w-none">
            <div>
                <Header />
                <Outlet />
                <Footer />
                <Modal />
            </div>
        </div>
    )
}

export default App
