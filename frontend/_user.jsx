import React, { useState } from 'react';
import Header from './assets/header';
import ProfileCard from './_profile';

function User({ currentMode, updateCurrentMode }) {
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
            <h1>User Dashboard</h1>
            <p>
              Welcome to the User Dashboard! Use the navigation links in the header to explore the website.
            </p>
          </>
        )}
        {showProfile && <ProfileCard />}
      </div>
    </div>
  );
}

export default User;