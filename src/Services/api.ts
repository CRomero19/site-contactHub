import axios from 'axios';

export const baseURL = axios.create({
    baseURL: "https://servidor-pipoca-production.up.railway.app",
    timeout: 5000,
})
