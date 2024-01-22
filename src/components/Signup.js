// src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const SignUp = () => {
    const { login } = useAuth();  // Import useAuth hook

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
            console.log('Signup successful!');
            login(response.data);
        } catch (error) {
            console.error('Signup failed:', error.message);
        }
    };

    

    return (
        <div>
            <h2>Sign Up</h2>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default SignUp;
