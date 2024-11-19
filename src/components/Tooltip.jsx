import { useState } from 'react'

const Tooltip = ({ children, text, position = 'top' }) => {
    const [visible, setVisible] = useState(false)

    const positionClasses = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    }

    return (
        <div
            className="relative flex"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    className={`absolute z-10 px-3 py-1 text-sm text-white bg-lightCard dark:bg-darkCard rounded shadow-lg ${positionClasses[position]}`}
                >
                    <span>{text}</span>
                </div>
            )}
        </div>
    )
}

export default Tooltip
