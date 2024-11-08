import React, { useState } from 'react';
import { register } from '../api/apiService';
import "../css/SignInPage.css";

// import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ onClose, switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });

            // Clear fields after registration
            setUsername('');
            setEmail('');
            setPassword('');

            // navigate('/');
            switchToLogin();
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleRegister}>
                <input type="text" className="modal-input" placeholder="Username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" className="modal-input" placeholder="Email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="modal-input" placeholder="Password" autoComplete="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="modal-button" type="submit">Register</button>
            </form>
            <button className="modal-button cancel-button" onClick={onClose}>
                Close
            </button>
            <p className="modal-footer">
                Already have an account?{" "}
                <span onClick={switchToLogin} className="link">
                    Log in
                </span>
            </p>
        </div>
    );
}

export default RegisterPage;