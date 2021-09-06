import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 30000,
  headers: {
    'authorization': `Bearer ${localStorage.getItem('jwt')}`,
  },
});

// Response interceptor for API calls
instance.interceptors.response.use((response) => response, async (error) => {
  if (
    error.response?.data?.msj === 'SESSION_EXPIRED'
  ) {
   window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default instance;