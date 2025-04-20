import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './header.css'; // Ensure this points to the correct file
import headerImage from './images/header.png';
import { FaCaretDown } from 'react-icons/fa';

function Header({ setShowLoginModal, setShowSignupModal, setShowAdminLoginModal, currentMode, updateCurrentMode }) {
  const [openDropdown, setOpenDropdown] = useState(false); // Simplified to a boolean
  const [openAdminDropdown, setOpenAdminDropdown] = useState(false); // Track Admin Panel dropdown state
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown); // Simplified toggle logic
  };

  const toggleAdminDropdown = () => {
    setOpenAdminDropdown(!openAdminDropdown);
  };

  const handleLogin = () => {
    setShowLoginModal(true); // Show the login modal
  };

  const handleAdminLogin = () => {
    setShowAdminLoginModal(true); // Show the admin login modal
  };

  const handleLoginModalConfirm = () => {
    updateCurrentMode('User'); // Update the current mode to 'User'
    navigate('/user'); // Navigate to the user mode
  };

  const handleAdminLoginModalConfirm = () => {
    updateCurrentMode('Admin'); // Update the current mode to 'Admin'
    navigate('/admin'); // Navigate to the admin mode
  };

  const getLinks = () => {
    if (currentMode === 'Admin') {
      return [
        { label: 'Users', action: () => navigate('/users') },
        { label: 'Opportunities', action: () => navigate('/opportunities') },
        { label: 'Profile', action: () => navigate('/profile') },
        { 
          label: (
            <>
              Admin Panel <FaCaretDown /> {/* Add the upside-down triangle */}
            </>
          ),
          action: () => setOpenAdminDropdown(!openAdminDropdown), // Toggle the dropdown
        },
      ];
    }
    if (currentMode === 'Guest') {
      return [
        { label: 'Log in', action: handleLogin },
        { label: 'Log in as Admin', action: handleAdminLogin },
        { label: 'Sign up', action: () => setShowSignupModal(true) },
      ];
    }
    return [
      { label: 'Users', action: () => navigate('/users') },
      { label: 'Opportunities', action: () => navigate('/opportunities') },
      { label: 'Profile', action: () => navigate('/profile') },
    ];
  };

  return (
    <header className="header">
      <img
        src={headerImage}
        alt="Header Logo"
        className="header-logo"
        onClick={() => { updateCurrentMode('Guest'); navigate('/'); }} /* Navigate to the main screen */
      />
      <div className="header-links">
        {getLinks().map((link, index) => (
          <span key={index} className="header-link" onClick={link.action}>
            {link.label}
          </span>
        ))}
        {currentMode === 'Admin' && openAdminDropdown && (
          <div className="dropdown-menu admin-dropdown-menu">
            <span className="dropdown-item" onClick={() => navigate('/approve-opportunity')}>
              Approve Opportunity
            </span>
            <span className="dropdown-item" onClick={() => navigate('/approve-user')}>
              Approve New User
            </span>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {currentMode || 'Guest'} <FaCaretDown /> {/* Ensure 'Guest' is displayed if currentMode is empty */}
        </button>
        {openDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => { updateCurrentMode('User'); navigate('/user'); }}>User</button>
            <button onClick={() => { updateCurrentMode('Admin'); navigate('/admin'); }}>Admin</button>
            <button onClick={() => { updateCurrentMode('Guest'); navigate('/guest'); }}>Guest</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
