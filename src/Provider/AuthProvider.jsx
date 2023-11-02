import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setuser] =useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () =>{
            return unSubscribe();
        }
    } ,[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;