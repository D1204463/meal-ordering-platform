// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getMenus = () => {
    return axios.get(`${API_URL}/menus`);
};
