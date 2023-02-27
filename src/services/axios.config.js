import axios from 'axios';

const instance=axios.create({
    baseURL:"https://electronics-backend-zonaetmunna.vercel.app/api"
});

export default instance;