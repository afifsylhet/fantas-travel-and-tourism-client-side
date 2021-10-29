import fireBaseInit from "./firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import { useEffect, useState } from "react";

fireBaseInit();


export const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }


    const handleSignout = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })

    }, [auth]);
    return {
        user,
        setUser,
        error,
        setError,
        signInWithGoogle,
        handleSignout,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;
