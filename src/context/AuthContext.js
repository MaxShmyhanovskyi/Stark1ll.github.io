import { createContext,useContext, useEffect,useState } from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase/firebase';
 

const userContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        return signOut(auth)
    }

    const updateUserInfo = (fullName, phoneNumber) => updateProfile(auth.currentUser, {
        displayName: fullName,
        phoneNumber: phoneNumber,
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            
            setUser(currentUser);
        })
            
        
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <userContext.Provider value={{ createUser, user, logout, updateUserInfo, userLogIn}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}

