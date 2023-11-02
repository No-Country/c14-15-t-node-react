
import axios from 'axios';

const greenIXApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    
});


export default greenIXApi;