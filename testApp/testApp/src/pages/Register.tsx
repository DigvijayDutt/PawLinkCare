import React, {useState} from "react";
import './Register.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

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
            <h3>Create Account</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="FirstName">First Name</label>
                <input value={FirstName} type="text" placeholder="your name" id="FirstName" name="FirstName" />
                <label htmlFor="LastName">Last Name</label>
                <input value={LastName} type="text" id="LastName" name="LastName" />
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} type="password" id="password" name="password" />
                <button>Create Account</button>
                <h6>Already have an account <Link to={'./login'}>Log In</Link></h6>
                <h3>Or</h3>
                <button>Log In with google</button>
                <button>Log In with facebook</button>
            </form>
        </>
    );
};

export default Register;