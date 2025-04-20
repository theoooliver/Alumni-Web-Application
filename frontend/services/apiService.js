import axios from 'axios';

// Use the provided IP address for API connections
const API_BASE_URL = 'http://104.131.161.0/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch opportunities
export const fetchOpportunities = async () => {
  try {
    const response = await apiClient.get('/opportunities');
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
};

// User API calls
export const fetchUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fetch profile by username
export const fetchProfile = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export default apiClient;
