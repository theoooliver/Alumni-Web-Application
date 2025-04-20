import React, { useEffect, useState } from 'react';
import Header from './assets/header';
import { FaLinkedin } from 'react-icons/fa';
import './users.css'; // Import the new CSS file
import { fetchUsers } from './services/apiService'; // Import the API function

function UsersPage({ currentMode, updateCurrentMode }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 5;

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMoreInfo = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <Header currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <div className="users-container">
        <h2>Users Page</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="users-list">
            {currentUsers.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-icon">👤</div>
                <div className="user-info">
                  <p>{user.first_name} {user.last_name}</p>
                  <p>{user.major}</p>
                  <p>{user.company}</p>
                </div>
                <button className="more-info-button" onClick={() => handleMoreInfo(user)}>
                  More Info
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="pagination">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {selectedUser && (
        <>
          <div className="overlay"></div> {/* Add overlay */}
          <div className="user-details" style={{ backgroundColor: 'white' }}>
            <div className="user-icon-large">👤</div>
            <div className="user-details-info">
              <p><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
              <p><strong>Major:</strong> {selectedUser.major}</p>
              <p><strong>Company:</strong> {selectedUser.company}</p>
              <p><strong>Year Graduated:</strong> {selectedUser.year_graduated}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p>
                <a href={selectedUser.linkedin_link} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <FaLinkedin /> LinkedIn Profile
                </a>
              </p>
            </div>
            <button className="close-details-button" onClick={handleCloseDetails}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UsersPage;
