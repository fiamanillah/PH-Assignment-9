// ModalContext.js
import { createContext, useState, useContext } from 'react'

const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    // Function to show the modal with custom content
    const showModal = content => {
        setModalContent(content)
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    // Function to hide the modal
    const hideModal = () => {
        setIsOpen(false)
        setModalContent(null)
        document.body.style.overflow = 'auto'
    }

    return (
        <ModalContext.Provider value={{ isOpen, showModal, hideModal, modalContent }}>
            {children}
        </ModalContext.Provider>
    )
}

// Custom hook for easier usage
export const useModal = () => useContext(ModalContext)
