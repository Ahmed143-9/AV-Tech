// src/components/Admin/AdminControlPanel.js
import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useContent } from '../../context/ContentContext';

const AdminControlPanel = () => {
  const { isAdmin, logout, editMode, setEditMode } = useAdmin();
  const { resetContent, content } = useContent();
  const [isMinimized, setIsMinimized] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isAdmin) return null;

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout from admin mode?')) {
      logout();
    }
  };

  const handleReset = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    resetContent();
    setShowResetConfirm(false);
    alert('✅ Content reset to default values!');
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `avtech-content-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Main Control Panel */}
      <div 
        className={`admin-control-panel ${isMinimized ? 'minimized' : ''}`}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9997,
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: '12px',
          padding: isMinimized ? '10px' : '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          maxWidth: isMinimized ? '60px' : '320px',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          {!isMinimized && (
            <div className="d-flex align-items-center">
              <span className="badge bg-success me-2">
                <i className="fas fa-shield-alt me-1"></i>
                Admin
              </span>
              <small className="text-muted">Control Panel</small>
            </div>
          )}
          <button
            className="btn btn-sm btn-link text-white p-0"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            <i className={`fas fa-${isMinimized ? 'chevron-up' : 'chevron-down'}`}></i>
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Edit Mode Toggle */}
            <div className="mb-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="editModeSwitch"
                  checked={editMode}
                  onChange={() => setEditMode(!editMode)}
                />
                <label className="form-check-label" htmlFor="editModeSwitch">
                  <small>
                    {editMode ? '✏️ Edit Outlines: ON' : '👁️ Edit Outlines: OFF'}
                  </small>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-grid gap-2">
              {/* Export Content */}
              <button
                className="btn btn-sm btn-info text-white"
                onClick={exportContent}
              >
                <i className="fas fa-download me-2"></i>
                Export Content
              </button>

              {/* Reset Content */}
              <button
                className="btn btn-sm btn-warning"
                onClick={handleReset}
              >
                <i className="fas fa-undo me-2"></i>
                Reset to Default
              </button>

              {/* Logout */}
              <button
                className="btn btn-sm btn-danger"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt me-2"></i>
                Exit Admin Mode
              </button>
            </div>

            {/* Info */}
            <div className="mt-3 pt-3 border-top border-secondary">
              <small className="text-muted d-block">
                <i className="fas fa-info-circle me-1"></i>
                Click any text to edit
              </small>
              <small className="text-muted d-block mt-1">
                <i className="fas fa-save me-1"></i>
                Changes save automatically
              </small>
            </div>
          </>
        )}

        {isMinimized && (
          <div className="text-center">
            <i className="fas fa-tools" style={{ fontSize: '1.5rem' }}></i>
          </div>
        )}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <>
          <div 
            className="modal-backdrop fade show" 
            style={{ zIndex: 9998 }}
            onClick={() => setShowResetConfirm(false)}
          />
          <div className="modal d-block" style={{ zIndex: 9999 }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header bg-warning">
                  <h5 className="modal-title">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Confirm Reset
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowResetConfirm(false)}
                  />
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to reset all content to default values?</p>
                  <p className="text-danger mb-0">
                    <strong>Warning:</strong> This action cannot be undone. All your changes will be lost.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowResetConfirm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={confirmReset}
                  >
                    Yes, Reset Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Pulsing Indicator */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 8px 32px rgba(13, 110, 253, 0.5);
          }
        }

        .admin-control-panel {
          animation: pulse 2s infinite;
        }

        .admin-control-panel.minimized {
          animation: none;
        }

        .admin-control-panel:hover {
          box-shadow: 0 12px 48px rgba(13, 110, 253, 0.4) !important;
        }

        .form-check-input:checked {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }

        .btn-sm {
          font-size: 0.875rem;
          padding: 0.375rem 0.75rem;
        }
      `}</style>
    </>
  );
};

export default AdminControlPanel;