import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Section from '../layouts/Section'
import { LiaSpinnerSolid } from 'react-icons/lia'
import Button from '../components/Button'

import { Helmet } from 'react-helmet-async'

function UserProfile() {
    const { user, updateUserProfile, logout } = useAuth()
    const [photoURL, setPhotoURL] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [loading, setLoading] = useState(false)

    async function handleUpdateProfile(e) {
        e.preventDefault()
        setLoading(true)
        try {
            await updateUserProfile(displayName, photoURL)
            setIsEditing(false)
        } catch (error) {
            console.error('Failed to update profile:', error.message)
        } finally {
            setLoading(false)
        }
    }

    // Handle Sign Out
    function handleSignOut() {
        logout()
    }

    return (
        <Section>
            <Helmet>
                <title>Career Craft | Profile</title>
            </Helmet>
            <div className="min-h-screen w-full">
                <div className="flex flex-col max-w-screen-lg mx-auto">
                    <h1 className="text-2xl font-bold mb-6">Profile</h1>
                    <div className="">
                        <div className="w-32 h-32 rounded-full border-2 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={
                                    user?.photoURL ||
                                    'https://fi.amanillah.com/img/assignment-9/placeholder.png'
                                }
                                alt="Profile"
                                aria-label="Profile Picture"
                            />
                        </div>
                    </div>

                    <form className="flex-grow" onSubmit={handleUpdateProfile}>
                        <div className="mb-4 w-full">
                            <label className="block mb-2 text-sm font-medium">Full Name</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    onChange={e => setDisplayName(e.target.value)}
                                    className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary"
                                    placeholder="Enter your name"
                                    required
                                />
                            ) : (
                                <div className="bg-lightCardSecondary border border-gray-300 rounded-lg p-2.5 dark:bg-darkCardSecondary">
                                    <span>{user?.displayName || 'No name provided'}</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium">Email</label>
                            <div className="bg-lightCardSecondary border border-gray-300 rounded-lg p-2.5 dark:bg-darkCardSecondary">
                                <span>{user?.email || 'No email available'}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium">
                                Profile Photo URL
                            </label>
                            {isEditing ? (
                                <input
                                    type="url"
                                    onChange={e => setPhotoURL(e.target.value)}
                                    className="bg-lightCardSecondary border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-darkCardSecondary"
                                    placeholder="https://example.com/photo.jpg"
                                    required
                                />
                            ) : (
                                <div className="bg-lightCardSecondary w-full border truncate border-gray-300 rounded-lg p-2.5 dark:bg-darkCardSecondary">
                                    <span className="">
                                        {user?.photoURL || 'No photo URL provided'}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            {isEditing ? (
                                <Button
                                    type="submit"
                                    className="bg-accent text-darkPrimary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <LiaSpinnerSolid className="animate-spin" />
                                    ) : (
                                        'Save'
                                    )}
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    className="bg-accent text-darkPrimary"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </Button>
                            )}
                            {isEditing ? (
                                <Button
                                    type="button"
                                    className="bg-red-500 text-white"
                                    onClick={() => {
                                        setIsEditing(false)
                                    }}
                                >
                                    Cancel
                                </Button>
                            ) : (
                                <Button
                                    type="button"
                                    className="bg-red-500 text-white"
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default UserProfile
