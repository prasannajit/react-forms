import axios from 'axios';
export default axios.create({
    headers: {
        Authorization: 'Client-ID 05c12f1c9e53657256fcfeb02c50a4a31c27083ccad667ed71756fc37b8ade4c'
    },
    baseURL: 'https://api.unsplash.com'
});