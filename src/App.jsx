import Modal from './components/Modal'
import Header from './layouts/Header'

import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="prose max-w-none">
            <div>
                <Header />
                <Outlet />
                <Modal />
            </div>
        </div>
    )
}

export default App
