// // Create a new context for authentication
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const login = async (userData) => {
//         // Logic to handle login (use your login API)
//         await setUser(userData);
//     };


//     const logout = () => {
//         // Logic to handle logout
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    const login = async (userData) => {
        // Assuming the token is included in the response
        const { token, ...restUserData } = userData;
        await setAuthToken(token);
        await setUser(restUserData);
    };

    const logout = () => {
        // Logic to handle logout
        setUser(null);
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

