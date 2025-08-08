import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import { use, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();


function AuthProvider({dataPromise, children}) {
    const data = use(dataPromise);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);
    const [fired, setFired] = useState(null)

    useEffect(() => {
        if (user) {
            const email = user.email;
            const information = data.find((info) => info.email === email);
            const role = information?.role;
            const fired = information?.fired;
            setFired(fired);
            setRole(role);
        } else {
            setFired(null);
            setRole(null);
        }
    }, [user])

    function registerAccount(email, password) {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function updateNameImg(name, image) {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    function loginUser(email, password) {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return(() => {
            unSubscribe();
        })
    })

    function googleLogin() {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    function logout() {
        setLoading(true);
        return signOut(auth);
    }

    const value = {
        user, loading, registerAccount, updateNameImg, role, loginUser, fired, googleLogin, logout
    }
    return(
        <AuthContext value = {value}>
            {
                children
            }
        </AuthContext>
    )
}

export default AuthProvider;