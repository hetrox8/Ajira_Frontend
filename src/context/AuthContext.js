import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  
  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post('/api/auth/register', { name, email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
