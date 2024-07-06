import React from 'react';
import { Link } from "react-router-dom";
import './PawLink.css';
import Login from './Login';

const PawLink = () => {
    return (
        <div className="pawlink">
            <header className="header">
                <div className="logo">
                    {/* Logo Removed */}
                </div>
                <nav className="navbar">
                    <ul>
                        <li><a href="https://goldsgym.in/">Home</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Gym">About</a></li>
                        <li><a href="https://www.myfitnesspal.com/account/create/welcome">Hire Caretaker</a></li>
                        <li><a href="https://goldsgym.in/contact/">Find Pet</a></li>
                    </ul>
                </nav>
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
            </header>

            <section className="welcome-section">
                <h1>Welcome, Buddies to Paw Links!</h1>
                {/* Image Removed */}
            </section>

            <section className="caretaker-section">
                <h2>Available Caretaker</h2>
                <div className="caretaker-list">
                    <div className="caretaker-card">
                        <div className="caretaker-info">
                            <h3>Rahul Verma</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Experience: Expert</p>
                            <p>Availability: Weekdays</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                    <div className="caretaker-card">
                        <div className="caretaker-info">
                            <h3>Rahul Verma</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Experience: Expert</p>
                            <p>Availability: Weekdays</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                    <div className="caretaker-card">
                        <div className="caretaker-info">
                            <h3>Rahul Verma</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Experience: Expert</p>
                            <p>Availability: Weekdays</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                </div>
            </section>

            <section className="dedication-section">
                <h2>Dedicated to the well-being of your beloved pets</h2>
                <p>
                    Thinking to ensure the well-being of your beloved pets is a task close to our hearts. 
                    We understand that they’re cherished members of your family, and their happiness is our priority.
                </p>
                <button className="btn">Log in as Pet owner</button>
            </section>

            <section className="pets-section">
                <h2>Available Pets</h2>
                <div className="pets-list">
                    <div className="pet-card">
                        <div className="pet-info">
                            <h3>Kitty</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Location: Gaziabad</p>
                            <p>Age: 4 years</p>
                            <p>Type: Dog</p>
                            <p>Breed: Cutie</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                    <div className="pet-card">
                        <div className="pet-info">
                            <h3>Kitty</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Location: Ranchi</p>
                            <p>Age: 2 years</p>
                            <p>Type: Cat</p>
                            <p>Breed: Pussy</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                    <div className="pet-card">
                        <div className="pet-info">
                            <h3>Kitty</h3>
                            <p>Time: 10:30am-5pm</p>
                            <p>Date: 12 June 2025</p>
                            <p>Location: Ranchi</p>
                            <p>Age: 2 years</p>
                            <p>Type: Cat</p>
                            <p>Breed: Pussy</p>
                        </div>
                        <button className="btn">Go</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PawLink;
