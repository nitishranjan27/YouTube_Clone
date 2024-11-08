import React, { useState } from 'react';
import { login } from '../api/apiService';
import youtube_logo from '../assets/youtube_logo.png';
import RegisterPage from './RegisterPage';
import "../css/SignInPage.css";

const SignInPage = ({ isOpen, onClose, onLogin }) => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.data.token);
            onLogin(response)
            
            console.log(response.data.token);
            alert('Login Successfully');
        } catch (error) {
            alert('Login failed');
        }
    };

    const toggleCreateAccount = () => {
        setIsCreatingAccount((prev) => !prev);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <img
                        src={youtube_logo}
                        alt="YouTube Logo"
                        className="modal-logo"
                    />
                    {isCreatingAccount ? (
                        <RegisterPage onClose={onClose} switchToLogin={toggleCreateAccount} />
                    ) : (
                        <>
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <input type="email" className="modal-input" placeholder="Email" autoComplete="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" className="modal-input" placeholder="Password" autoComplete="current-password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="modal-remember">
                                    <div>
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <a href="#" className="modal-link">Lost Password?</a>
                                </div>
                                <button className="modal-button" type="submit">Sign In</button>
                            </form>
                            <button className="modal-button cancel-button" onClick={onClose}>Cancel</button>
                            {error && <p className="error">{error}</p>}
                            <p className="modal-footer">
                                Not registered?{" "}
                                <span onClick={toggleCreateAccount} className="link">
                                    Create account
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default SignInPage;