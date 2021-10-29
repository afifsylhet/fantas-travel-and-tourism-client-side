import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../utilities/useAuth';



const Login = () => {
    const { signInWithGoogle, setError, setUser, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const googleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                history.push(redirectUrl)
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    };


    return (
        <div>
            <button onClick={googleSignIn} className="btn btn-success"> Login With Google</button>
        </div>
    );
};

export default Login;