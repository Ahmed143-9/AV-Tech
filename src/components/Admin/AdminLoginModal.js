// src/components/Admin/AdminLoginModal.js
import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';

const AdminLoginModal = () => {
  const { showLogin, setShowLogin, login } = useAdmin();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!showLogin) return null;

  const handleSubmit = async () => {
    if (!password) {
      setError('Please enter password');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(password);
    
    if (success) {
      setPassword('');
      setError('');
      // Modal will close automatically via context
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setShowLogin(false);
      setPassword('');
      setError('');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="modal-backdrop fade show" 
        style={{ zIndex: 9998 }}
        onClick={() => {
          setShowLogin(false);
          setPassword('');
          setError('');
        }}
      />

      {/* Modal */}
      <div 
        className="modal d-block" 
        style={{ zIndex: 9999 }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg border-0">
            
            {/* Header */}
            <div className="modal-header bg-dark text-white border-0">
              <h5 className="modal-title d-flex align-items-center">
                <span className="me-2">🔒</span>
                Admin Access
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white"
                onClick={() => {
                  setShowLogin(false);
                  setPassword('');
                  setError('');
                }}
                disabled={isLoading}
              />
            </div>

            {/* Body */}
            <div className="modal-body p-4">
              <div className="mb-4 text-center">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem' }}>🛡️</span>
                </div>
                <p className="text-muted small mb-0">
                  Enter your admin password to access content management
                </p>
              </div>

              {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  {error}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setError('')}
                  />
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="adminPassword" className="form-label fw-bold">
                  Password
                </label>
                <input
                  id="adminPassword"
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter admin password"
                  autoFocus
                  disabled={isLoading}
                />
                <small className="text-muted">
                  Press Enter to login, Esc to cancel
                </small>
              </div>

              <button 
                className="btn btn-primary w-100 btn-lg"
                onClick={handleSubmit}
                disabled={isLoading || !password}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Verifying...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Login
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="modal-footer border-0 bg-light">
              <small className="text-muted w-100 text-center">
                <i className="fas fa-info-circle me-1"></i>
                This is a secure admin panel. Unauthorized access is prohibited.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .modal-backdrop {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
        }

        .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }

        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-dialog {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default AdminLoginModal;