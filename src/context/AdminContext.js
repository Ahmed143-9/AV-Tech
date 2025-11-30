// src/context/AdminContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [keySequence, setKeySequence] = useState([]);

  // Check if admin is already logged in (from localStorage)
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      // In production, verify token with backend
      setIsAdmin(true);
    }
  }, []);

  // Secret key detection: Ctrl + Shift + A (3 times within 2 seconds)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        
        const now = Date.now();
        const newSequence = [...keySequence, now].filter(time => now - time < 2000);
        setKeySequence(newSequence);
        
        if (newSequence.length >= 3) {
          setShowLogin(true);
          setKeySequence([]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keySequence]);

  const login = (password) => {
    // In production, verify with backend API
    // For now, using hardcoded password
    if (password === 'AVTechAdmin@2025') {
      setIsAdmin(true);
      setShowLogin(false);
      localStorage.setItem('adminToken', 'dummy-token');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setEditMode(false);
    localStorage.removeItem('adminToken');
  };

  const value = {
    isAdmin,
    showLogin,
    setShowLogin,
    editMode,
    setEditMode,
    login,
    logout
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};