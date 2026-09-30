import axios from 'axios';

// This dynamically chooses between the Render URL (production) and localhost (development)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const API = axios.create({
    baseURL: API_BASE_URL,
});

export default API;
