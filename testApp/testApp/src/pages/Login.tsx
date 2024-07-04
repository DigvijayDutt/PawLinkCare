import React, { useState, FormEvent } from "react";
import { firestore } from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function Login() {
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

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
    };

    return (
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
    );
}

export default Login;