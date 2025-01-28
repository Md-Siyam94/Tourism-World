import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase_init";
import useAxiosPublic from "../custom hooks/useAxiosPublic";



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (updatedInfo) => {
        setLoading(true)
        // console.log(updatedInfo);
        return updateProfile(auth.currentUser, updatedInfo)
    }



    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("From observer", currentUser);
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }

                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem("access-token", res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                // If user logout
                localStorage.removeItem("access-token")
                setLoading(false)
            }


        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])





    const authInfo = {
        user,
        loading,
        signUpUser,
        loginWithGoogle,
        updateUserProfile,
        loginUser,
        logOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;