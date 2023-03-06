import axios from 'axios';

export const customAxios = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
