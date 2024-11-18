import Header from './layouts/Header'

import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className="prose max-w-none">
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default App
