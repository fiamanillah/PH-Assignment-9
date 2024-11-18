// Modal.js
import { useModal } from '../context/ModalContext'

const Modal = () => {
    const { isOpen, modalContent } = useModal()

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black dark:bg-white dark:bg-opacity-30 bg-opacity-50">
            <div className="bg-background dark:bg-darkBackground rounded-lg shadow-lg p-6 w-[90%] max-w-md">
                {modalContent}
            </div>
        </div>
    )
}

export default Modal
