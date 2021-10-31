import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../utilities/useAuth';
import './Login.css'


const Login = () => {
    const element = <FontAwesomeIcon icon={faGoogle} />


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
        <div className="p-5 bg-light">
            <div className="width mx-auto p-3 text-center shadow">
                <span className="font-size text-muted ">{element}</span>
                <hr />
                <button onClick={googleSignIn} className="btn btn-secondary"> {element}  Click for google login</button>
            </div>

        </div>
    );
};

export default Login;