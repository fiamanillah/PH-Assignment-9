import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const updateUserProfile = async (displayName, photoURL) => {
        if (auth.currentUser) {
            try {
                setLoading(true)
                await updateProfile(auth.currentUser, { displayName, photoURL })
                // Fetch the updated user data after profile update
                const updatedUser = auth.currentUser
                setUser({ ...updatedUser, displayName, photoURL })
            } catch (error) {
                console.error('Failed to update profile:', error)
                throw error
            } finally {
                setLoading(false)
            }
        } else {
            throw new Error('No user is logged in')
        }
    }

    // Sign up with email and password and update profile
    const registerWithEmail = async (email, password, displayName, photoURL) => {
        try {
            setLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            // Update the user's profile with name and photo URL
            updateUserProfile(displayName, photoURL)
            setUser(userCredential.user)
        } catch (error) {
            console.error('Registration Error:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const loginWithEmail = async (email, password) => {
        try {
            setLoading(true)
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
        } catch (error) {
            console.error('Login Error:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        try {
            setLoading(true)
            const result = await signInWithPopup(auth, provider)
            setUser(result.user)
        } catch (error) {
            console.error('Google Login Error:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    const resetPassword = async email => {
        try {
            await sendPasswordResetEmail(auth, email)
        } catch (error) {
            console.error('Password Reset Error:', error)
            throw error
        }
    }

    const logout = async () => {
        try {
            setLoading(true)
            await signOut(auth)
        } catch (error) {
            console.error('Logout Error:', error)
            throw error
        } finally {
            setUser(null)
            setLoading(false)
        }
    }

    // Track user authentication status
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                registerWithEmail,
                loginWithEmail,
                loginWithGoogle,
                resetPassword,
                logout,
                updateUserProfile,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
