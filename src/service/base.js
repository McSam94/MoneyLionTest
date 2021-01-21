import axios from 'axios';

const apiClient = axios.create({
    baseURL: BASE_URL,
});

const { post } = apiClient;
export { post };
