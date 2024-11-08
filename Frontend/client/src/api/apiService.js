// src/api/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const setAuthToken = (token) => {
//   if (token) {
//     const Bearertoken = `Bearer ${token}`;
//     // api.defaults.headers.common['Authorization'] = Bearertoken.replace('Bearer ', '');
//     // api.defaults.headers.common['Authorization'] = `${token}`;
//     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     console.log(api.defaults.headers.common);
//   } else {
//     delete api.defaults.headers.common['Authorization'];
//   }
// };

// Auth endpoints
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);

// Video endpoints
export const fetchVideos = () => api.get('/videos');
export const fetchVideo = (videoId) => api.get(`/videos/${videoId}`);

// Channel endpoints
export const createChannel = (data) => api.post('/channels', data);
export const fetchChannel = (channelId) => api.get(`/channels/${channelId}`);

// Comment endpoints
export const addComment = (videoId, data) => api.post(`/comments/${videoId}`, data);
export const getComments = (videoId) => api.get(`/comments/${videoId}`);
export const updateComment = (commentId, data) => api.put(`/comments/${commentId}`, data);
export const deleteComment = (commentId) => api.delete(`/comments/${commentId}`);

// export default { setAuthToken };