import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Section from '../layouts/Section'
// import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useModal } from '../context/ModalContext'
import { Helmet } from 'react-helmet'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const { resetPassword } = useAuth()
    const navigate = useNavigate()

    const { showModal, hideModal } = useModal()
    function handleResetPass(e) {
        e.preventDefault()
        showModal(
            <div>
                <h2 className="text-xl font-bold">Password reset mail sent</h2>
                <p>Please check your email and reset your password.</p>
                <Button
                    className="mt-4 bg-blue-500 text-white p-2 rounded"
                    onClick={() => {
                        navigate('/login')
                        hideModal()
                    }}
                >
                    Log In
                </Button>
            </div>
        )
        resetPassword(email)
    }

    return (
        <Section>
            <Helmet>
            <title>Career Craft | Forgot Password</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center px-6 py-8 h-screen mx-auto">
                <Link
                    to={'/'}
                    className="flex items-center mb-6 text-2xl font-semibold no-underline text-accent hover:text-accent uppercase"
                >
                    <img className="w-8 h-8 mr-2" src="/CareerCraftLogo_Accent.svg" alt="logo" />
                    Career Craft
                </Link>
                <div className="w-full bg-lightCard rounded-lg shadow dark:border dark:border-darkCardSecondary md:mt-0 sm:max-w-md xl:p-0 dark:bg-darkCard dark:border-cardbg-darkCardSecondary">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2x">
                            Reset password
                        </h1>

                        {/* <button
                            className="flex items-center justify-center text-primary dark:text-darkPrimary gap-2 bg-lightCardSecondary border border-gray-300  rounded-lg w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-40 "
                            onClick={loginWithGoogle}
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </button> */}

                        <form className="space-y-4 md:space-y-6" onSubmit={handleResetPass}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    className="bg-lightCardSecondary border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-accent dark:focus:border-accent"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full text-white bg-accent">
                                Reset
                            </Button>

                            <p className="text-sm font-light text-babg-lightCardSecondary0 dark:text-gray-400">
                                Remember password?{' '}
                                <Link
                                    to={'/login'}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ForgotPassword
