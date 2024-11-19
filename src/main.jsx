import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoutes from './routes/MainRoutes.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ServicesProvider } from './context/ServicesContext.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <HelmetProvider>
                <AuthProvider>
                    <ServicesProvider>
                        <ModalProvider>
                            <MainRoutes />
                        </ModalProvider>
                    </ServicesProvider>
                </AuthProvider>
            </HelmetProvider>
        </ThemeProvider>
    </StrictMode>
)
