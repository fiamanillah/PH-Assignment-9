import { useState } from 'react'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { IoEyeOffOutline } from 'react-icons/io5'

function PasswordInput({ label, name, id, placeholder, value, onChange, required = false }) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="mt-4">
            <label htmlFor={id} className="block mb-2 text-sm font-medium">
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-accent dark:focus:border-accent"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-xl focus:outline-none"
                >
                    {showPassword ? <MdOutlineRemoveRedEye /> : <IoEyeOffOutline />}
                </button>
            </div>
        </div>
    )
}

export default PasswordInput
