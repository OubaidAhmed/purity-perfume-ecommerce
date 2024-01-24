import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log('Login successful!', response.data.message);

            // Set user as logged in
            login(response.data);

            // After obtaining the token during login
            const token = response.data.token;

            // Decode the token
            // const decodedUser = generateToken(token);

            // Set the token in axios headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Redirect to the home page
            redirectToHome();
        } catch (error) {
            console.error('Login failed:', error.message);
            console.log('Detailed error:', error.response?.data); // Log detailed error
        }
    };

    const redirectToHome = () => {
        // Use this callback for redirection
        navigate('/', { replace: true });
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
