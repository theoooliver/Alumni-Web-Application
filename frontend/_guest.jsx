import React, { useState } from 'react';
import Header from './assets/header';
import { useNavigate } from 'react-router-dom';

function Guest({ currentMode, updateCurrentMode }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false); // New state for Admin Login Modal
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showUserCreatedModal, setShowUserCreatedModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Header
        setShowLoginModal={setShowLoginModal}
        setShowSignupModal={setShowSignupModal}
        setShowAdminLoginModal={setShowAdminLoginModal} // Pass the Admin Login Modal state
        currentMode={currentMode}
        updateCurrentMode={updateCurrentMode}
      />
      <div style={{ paddingTop: '60px' }}>
        <h1>Guest Page</h1>
        <p>
          You are currently in Guest mode. Log in as a User to explore the website, or log in as an Admin to manage the platform.
        </p>
      </div>
      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="button-container">
              <button onClick={() => {
                updateCurrentMode('User'); // Update mode to 'User'
                navigate('/user'); // Navigate to user mode
              }}>Login</button>
              <button onClick={() => setShowLoginModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {showAdminLoginModal && ( // New Admin Login Modal
        <div className="modal">
          <div className="modal-content">
            <h2>Admin Login</h2>
            <input type="text" placeholder="Admin Username" />
            <input type="password" placeholder="Admin Password" />
            <div className="button-container">
              <button onClick={() => {
                updateCurrentMode('Admin'); // Update mode to 'Admin'
                navigate('/admin'); // Navigate to admin mode
              }}>Login as Admin</button>
              <button onClick={() => setShowAdminLoginModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button-container">
              <button onClick={() => {
                setShowSignupModal(false);
                setShowUserCreatedModal(true);
              }}>Sign Up</button>
              <button onClick={() => setShowSignupModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* User Created Modal */}
      {showUserCreatedModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>User Created</h2>
            <div className="button-container">
              <button onClick={() => {
                updateCurrentMode('User'); // Update mode to 'User'
                navigate('/user'); // Navigate to user mode
              }}>Login</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Guest;