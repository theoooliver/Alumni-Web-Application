import React from 'react';
import Header from './assets/header';
import './approveUser.css'; // Import the new CSS file

function ApproveUser({ currentMode, updateCurrentMode }) {
  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];

  return (
    <div>
      <Header currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <main className="approve-user-container">
        <h1>Approve Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="approve-user-item">
              <div className="approve-user-info">
                <strong>{user.name}</strong> - {user.email}
              </div>
              <div className="approve-user-actions">
                <button className="approve-user-button">Approve</button>
                <button className="discard-user-button">Discard</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ApproveUser;
