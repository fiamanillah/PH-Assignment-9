import { createContext, useEffect, useState } from 'react'

// Create the ThemeContext
export const ThemeContext = createContext()

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check if there's a saved theme in localStorage
        const savedTheme = localStorage.getItem('theme')

        // If a theme is saved, use it; otherwise, fallback to system preference
        if (savedTheme) {
            return savedTheme === 'dark'
        } else {
            // Check system preference
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
    })

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    // Apply the dark mode class to the HTML document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
