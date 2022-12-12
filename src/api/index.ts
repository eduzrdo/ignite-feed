import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  headers: {
    'app-id': import.meta.env.VITE_DUMMYAPI_APP_ID,
  },
});
