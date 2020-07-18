import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://panadero-84b8f.firebaseio.com/'
});

export default instance;