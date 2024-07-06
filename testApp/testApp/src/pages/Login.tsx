import React, { useState, FormEvent } from "react";
import { firestore } from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import './Login.css';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

async function Login() {
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
    }
    try {
        const docRef = await addDoc(collection(firestore, "messages"), {
            content: message,
            timestamp: new Date()
        });
        setStatus(`Message sent with ID: ${docRef.id}`);
        setMessage(""); // Clear the input field
    } catch (error) {
        setStatus(`Error: ${(error as Error).message}`);
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


            <div>
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Enter your message"
                        required
                    />
                    <button type="submit">Send</button>
                </form>
                <p>{status}</p>
            </div>
        </>
    );
}

export default Login;