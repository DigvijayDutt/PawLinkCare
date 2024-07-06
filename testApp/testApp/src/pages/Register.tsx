import React, {useState} from "react";
import './Register.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Register(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [LastName, setLName] = useState('');
    const [FirstName, setFName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
            <Navbar />
            <body>
                <div className="signup-container">
                    <h2>Create Account</h2>
                    <form >
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="Email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button type="submit">Create Account</button>
                    </form>
                    <div className="login-link">
                        <Link to={'./Login'}>Already have an account? Log in.</Link>
                    </div>
                    <div className="alternative-signup">
                        <button className="google">Sign up with Google</button>
                        <button className="facebook">Sign up with facebook</button>
                    </div>
                </div>
            </body>
        </>
    );
};

export default Register;