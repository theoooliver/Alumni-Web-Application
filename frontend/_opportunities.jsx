import React, { useEffect, useState } from 'react';
import Header from './assets/header';
import './opportunities.css';
import { fetchOpportunities } from './services/apiService'; // Import the API function

function OpportunitiesPage({ currentMode, updateCurrentMode }) {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const opportunitiesPerPage = 5;

  useEffect(() => {
    const loadOpportunities = async () => {
      try {
        const data = await fetchOpportunities();
        setOpportunities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadOpportunities();
  }, []);

  const indexOfLastOpportunity = currentPage * opportunitiesPerPage;
  const indexOfFirstOpportunity = indexOfLastOpportunity - opportunitiesPerPage;
  const currentOpportunities = opportunities.slice(indexOfFirstOpportunity, indexOfLastOpportunity);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMoreInfo = (opportunity) => {
    setSelectedOpportunity(opportunity);
  };

  const handleCloseDetails = () => {
    setSelectedOpportunity(null);
  };

  return (
    <div>
      <Header currentMode={currentMode} updateCurrentMode={updateCurrentMode} />
      <div className="opportunities-container">
        <h2>Opportunities Page</h2>
        {loading ? (
          <p>Loading opportunities...</p>
        ) : (
          <div className="opportunities-list">
            {currentOpportunities.map((opportunity) => (
              <div key={opportunity._id} className="opportunity-card">
                <div className="opportunity-info">
                  <p><strong>Title:</strong> {opportunity.title}</p>
                  <p><strong>Posted By:</strong> {opportunity.posted_by}</p>
                  <p><strong>Type:</strong> {opportunity.type}</p>
                  <p><strong>Paid:</strong> {opportunity.is_paid ? `$${opportunity.amount}` : 'Not Paid'}</p>
                </div>
                <button className="more-info-button" onClick={() => handleMoreInfo(opportunity)}>
                  More Info
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="pagination">
          {Array.from({ length: Math.ceil(opportunities.length / opportunitiesPerPage) }, (_, index) => (
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
      {selectedOpportunity && (
        <>
          <div className="overlay"></div>
          <div className="opportunity-details" style={{ backgroundColor: 'white' }}>
            <div className="opportunity-details-info">
              <p><strong>Title:</strong> {selectedOpportunity.title}</p>
              <p><strong>Posted By:</strong> {selectedOpportunity.posted_by}</p>
              <p><strong>Type:</strong> {selectedOpportunity.type}</p>
              <p><strong>Paid:</strong> {selectedOpportunity.is_paid ? `$${selectedOpportunity.amount}` : 'Not Paid'}</p>
              <p><strong>Description:</strong> {selectedOpportunity.description}</p>
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

export default OpportunitiesPage;
