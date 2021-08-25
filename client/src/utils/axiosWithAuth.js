import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        // TO ADD BASE URL WHEN WE CAN
        baseURL: ""
    });
}

export default axiosWithAuth;