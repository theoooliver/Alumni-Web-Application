import React, { useState } from 'react';
import Header from './assets/header';
import ProfileCard from './_profile';

function Admin({ currentMode, updateCurrentMode }) {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  return (
    <div>
      <Header onProfileClick={handleProfileClick} currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <div style={{ paddingTop: '60px' }}>
        {!showProfile && (
          <>
            <h1>Admin Panel</h1>
            <p>
              You are in Admin mode. Use the navigation links to manage the data displayed on the website.
            </p>
          </>
        )}
        {showProfile && <ProfileCard />}
      </div>
    </div>
  );
}

export default Admin;