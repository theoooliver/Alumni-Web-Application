import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import stetsonLogo from './assets/images/stetson_logo.png';
import User from './_user';
import Admin from './_admin';
import Guest from './_guest';
import ProfilePage from './_profile'; // Import ProfilePage
import UsersPage from './_users'; // Import UsersPage
import OpportunitiesPage from './_opportunities'; // Import OpportunitiesPage
import ApproveUser from './_approveUser'; // Import ApproveUser
import ApproveOpportunity from './_approveOpportunity'; // Import ApproveOpportunity

function App({ updateCurrentMode }) {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className='Openning/Login'>
        <div className='logincard'>
          <img src={stetsonLogo} alt='Stetson Logo' className="logo"/>
          <h3>Alumni Portal</h3>
          <button className="loginbutton" onClick={() => { updateCurrentMode('User'); navigate('/user'); }}>Login as User</button>
          <button className="loginbutton" onClick={() => { updateCurrentMode('Admin'); navigate('/admin'); }}>Login as Admin</button>
          <button className="loginbutton" onClick={() => { updateCurrentMode('Guest'); navigate('/guest'); }}>Continue as Guest</button>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  const [currentMode, setCurrentMode] = useState('Guest'); // Default mode is Guest

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App updateCurrentMode={setCurrentMode} />} /> {/* Default to the login screen */}
        <Route path="/profile" element={<ProfilePage currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/users" element={<UsersPage currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/opportunities" element={<OpportunitiesPage currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/user" element={<User currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/admin" element={<Admin currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/guest" element={<Guest currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/approve-user" element={<ApproveUser currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
        <Route path="/approve-opportunity" element={<ApproveOpportunity currentMode={currentMode} updateCurrentMode={setCurrentMode} />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
