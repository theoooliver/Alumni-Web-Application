import axios from 'axios';

// Use the provided IP address for API connections
const API_BASE_URL = 'http://104.131.161.0/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export const fetchProfile = async (username) => {
  try {
    const response = await apiClient.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Opportunity API calls
export const fetchOpportunities = async () => {
  try {
    const response = await apiClient.get('/opportunities');
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunities:', error);
    throw error;
  }
};

export const fetchOpportunity = async (id) => {
  try {
    const response = await apiClient.get(`/opportunities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching opportunity:', error);
    throw error;
  }
};

export const createOpportunity = async (opportunityData) => {
  try {
    // Ensure field names match the backend model
    const formattedData = {
      title: opportunityData.title,
      description: opportunityData.description,
      posted_by: opportunityData.posted_by,
      type: opportunityData.type,
      company: opportunityData.company,
      location: opportunityData.location,
      requirements: opportunityData.requirements,
      deadline: opportunityData.deadline,
      needs_approval: opportunityData.needs_approval,
      approved: opportunityData.approved,
      approved_by: opportunityData.approved_by,
      is_paid: opportunityData.is_paid,
      amount: opportunityData.amount,
      contactEmail: opportunityData.contactEmail,
      link: opportunityData.link
    };
    
    const response = await apiClient.post('/opportunities', formattedData);
    return response.data;
  } catch (error) {
    console.error('Error creating opportunity:', error);
    throw error;
  }
};

// Major API calls
export const fetchMajors = async () => {
  try {
    const response = await apiClient.get('/majors');
    return response.data;
  } catch (error) {
    console.error('Error fetching majors:', error);
    throw error;
  }
};

export const fetchMajor = async (name) => {
  try {
    const response = await apiClient.get(`/majors/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching major:', error);
    throw error;
  }
};

export const createMajor = async (majorData) => {
  try {
    const response = await apiClient.post('/majors', majorData);
    return response.data;
  } catch (error) {
    console.error('Error creating major:', error);
    throw error;
  }
};

export default apiClient;