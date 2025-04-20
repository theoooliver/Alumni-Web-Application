import React, { useEffect, useState } from 'react';
import Header from './assets/header';
import './profile.css'; // Import the new CSS file
import profilePhoto from './assets/images/profile.jpg';
import { fetchProfile } from './services/apiService'; // Import the API function

function ProfilePage({ currentMode, updateCurrentMode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile('theoooliver');
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return (
    <div>
      <Header currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <div className="profile-card">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && user && (
          <>
            <h2>Profile</h2>
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <p><strong>Username:</strong> {user.user_name}</p>
            <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
            <p><strong>Year Graduated:</strong> {user.year_graduated}</p>
            <p><strong>Company:</strong> {user.company}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Major:</strong> {user.major}</p>
            <p><strong>LinkedIn:</strong> <a href={`https://${user.linkedin_link}`} target="_blank" rel="noopener noreferrer">{user.linkedin_link}</a></p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
