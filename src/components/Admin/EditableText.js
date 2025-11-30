// src/components/Admin/EditableText.js
import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { useContent } from '../../context/ContentContext';

const EditableText = ({ 
  section, 
  field, 
  index = null, 
  children, 
  className = '',
  multiline = false,
  placeholder = 'Click to edit...'
}) => {
  const { isAdmin, editMode } = useAdmin();
  const { updateContent } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(children || '');
  const [isSaving, setIsSaving] = useState(false);

  // Don't show edit functionality if not admin
  if (!isAdmin) {
    return <>{children}</>;
  }

  const handleClick = (e) => {
    if (!isEditing) {
      e.stopPropagation();
      setIsEditing(true);
      setValue(children || '');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Update content
    updateContent(section, field, value, index);
    
    // Simulate API call delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSaving(false);
    setIsEditing(false);
    
    // Show success message
    alert('✅ Content updated successfully!');
  };

  const handleCancel = () => {
    setValue(children || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCancel();
    } else if (e.key === 'Enter' && !multiline && e.ctrlKey) {
      handleSave();
    }
  };

  // Editing mode
  if (isEditing) {
    return (
      <div 
        className="position-relative" 
        style={{ 
          display: 'inline-block', 
          width: '100%',
          minWidth: '200px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {multiline ? (
          <textarea
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={5}
            autoFocus
            style={{
              width: '100%',
              resize: 'vertical',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
          />
        ) : (
          <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus
            style={{
              width: '100%',
              fontFamily: 'inherit',
              fontSize: 'inherit'
            }}
          />
        )}
        
        <div className="mt-2 d-flex gap-2">
          <button 
            className="btn btn-success btn-sm"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <span className="spinner-border spinner-border-sm me-1"></span>
                Saving...
              </>
            ) : (
              '✓ Save'
            )}
          </button>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={handleCancel}
            disabled={isSaving}
          >
            ✕ Cancel
          </button>
        </div>
        
        <small className="text-muted d-block mt-1">
          {multiline ? 'Press Ctrl+Enter to save, Esc to cancel' : 'Press Enter to save, Esc to cancel'}
        </small>
      </div>
    );
  }

  // Display mode (admin)
  return (
    <span
      className={`${className} admin-editable-text`}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        outline: editMode ? '2px dashed rgba(0, 123, 255, 0.5)' : 'none',
        outlineOffset: '2px',
        borderRadius: '4px',
        transition: 'all 0.2s ease'
      }}
      title="Click to edit"
    >
      {children}
      
      {/* Edit icon on hover */}
      <style>{`
        .admin-editable-text:hover {
          background-color: rgba(0, 123, 255, 0.1);
          padding: 2px 4px;
        }
        
        .admin-editable-text:hover::after {
          content: '✏️';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8em;
          opacity: 0.7;
        }
      `}</style>
    </span>
  );
};

export default EditableText;