import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.BASE_URL,
});

const { post } = apiClient;
export { post };
