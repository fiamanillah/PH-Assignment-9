import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

// Custom Hook to access the Theme Context
const useDarkMode = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useDarkMode must be used within a ThemeProvider')
    }

    return context
}

export default useDarkMode
