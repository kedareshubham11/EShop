import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-45306.cloudfunctions.net/api'

    // baseURL: 'http://localhost:5001/clone-45306/us-central1/api'
});

export default instance;