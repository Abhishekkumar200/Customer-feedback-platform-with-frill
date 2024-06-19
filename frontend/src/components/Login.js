import React, {useContext} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Login = (props) => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const handleUserApi = async(userData)=>{

        let result = await fetch("http://localhost:8000/api/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        result = await result.json();
        console.log(result);
    }

    const handleLoginSuccess = async (credentialResponse) => {
        const profileDetails = jwtDecode(credentialResponse.credential);
        // console.log(profileDetails);
        // console.log(credentialResponse);
        localStorage.setItem('Tensor-token', credentialResponse.credential);
        setUser(profileDetails);
        await handleUserApi(profileDetails);
        navigate('/feedback');
        props.handleAlert("Logged in Successfully.", "success");
    };

    const handleLoginFailure = () => {
        props.handleAlert("Please! try login using deepika.agarwal@tensorgo.com only.", "danger");
        console.log('Login Failed');
    };

    return (            
        <div className='d-flex justify-content-center py-3'>
            <div className="card text-center mb-3" style={{ width: "18rem", height: "18rem" }}>
                    <h5 className="card-title my-3">Login</h5>
                <div className="card-body d-flex justify-content-center">

                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginFailure}
                    />
                </div>
            </div>
        </div>           
    );
};

export default Login;
