import React from 'react';
import Header from './assets/header';
import './approveOpportunity.css'; // Import the new CSS file

function ApproveOpportunity({ currentMode, updateCurrentMode }) {
  const opportunities = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'New York, NY' },
    { id: 2, title: 'Data Analyst', company: 'DataWorks', location: 'San Francisco, CA' },
    { id: 3, title: 'Product Manager', company: 'Innovate Inc.', location: 'Austin, TX' },
  ];

  return (
    <div>
      <Header currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <main className="approve-container">
        <h1>Approve Opportunities</h1>
        <ul>
          {opportunities.map((opportunity) => (
            <li key={opportunity.id} className="approve-item">
              <div className="approve-info">
                <strong>{opportunity.title}</strong> - {opportunity.company} ({opportunity.location})
              </div>
              <div className="approve-actions">
                <button className="approve-button">Approve</button>
                <button className="discard-button">Discard</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ApproveOpportunity;
