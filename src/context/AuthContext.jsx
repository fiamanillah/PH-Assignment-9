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

    // Update user profile with name and photo URL
    const updateUserProfile = async (displayName, photoURL) => {
        if (auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, { displayName, photoURL })
                // Update local user state
                setUser({ ...auth.currentUser, displayName, photoURL })
            } catch (error) {
                console.error('Failed to update profile:', error)
                throw error
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
            setLoading(false)
            throw error
        }
    }

    const loginWithEmail = async (email, password) => {
        try {
            setLoading(true)
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
        } catch (error) {
            setLoading(false)
            console.error('Login Error:', error)
            throw error
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
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.error('Logout Error:', error)
            throw error
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