import React, {useState} from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <Navbar />
            <body>
                <div className="login-container">
                    <h2>Log in</h2>
                    <form >
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button>Log in</button>
                    </form>
                    <div className='signup-link'>
                        <Link to={'./Register'}>Don't have an account yet? Sign up</Link>
                    </div>
                    <div className='alternative-login'>
                        <button className="google">Log In with google</button>
                        <button className="facebook">Log In with facebook</button>
                    </div>
                    <div className='pet-owner-login'>
                        <button>Log In as Pet Ownner</button>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Login;