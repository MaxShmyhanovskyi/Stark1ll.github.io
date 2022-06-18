import { createContext,useContext, useEffect,useState } from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase/firebase';
import { toast } from 'react-toastify';
 

const userContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({})
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
            
        
        return () => {
            unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        return signOut(auth)
    }

    const updateUserInfo = (fullName) => updateProfile(auth.currentUser, {
        displayName: fullName,
    }).then(() => toast.success('Full Name was updated!'))


    return (
        <userContext.Provider value={{ createUser, user, logout, updateUserInfo, userLogIn}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}

