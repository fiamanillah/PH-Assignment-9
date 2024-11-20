// Modal.js
import { useModal } from '../context/ModalContext'

const Modal = () => {
    const { isOpen, modalContent, hideModal } = useModal()

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div
                className="fixed inset-0 cursor-pointer  bg-black dark:bg-white dark:bg-opacity-30 bg-opacity-50"
                onClick={hideModal}
            ></div>
            <div className="bg-background dark:bg-darkBackground rounded-lg shadow-lg p-6 w-[90%] max-w-md relative z-50">
                {modalContent}
            </div>
        </div>
    )
}

export default Modal
