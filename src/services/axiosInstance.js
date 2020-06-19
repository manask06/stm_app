import axios from 'axios'
const BACKEND_URL = 'http://localhost:8000/api'


const axiosInstance = axios.create({
    baseURL: `${BACKEND_URL}`,
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});
console.log('TCL: : axiosInstance', axiosInstance)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    console.log('TCL: : error.config', error.config)

    if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
        const refresh_token = localStorage.getItem('refreshToken');

        return axiosInstance
            .post('/user/token/refresh/', {refresh: refresh_token})
            .then((response) => {

                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);

                axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                originalRequest.headers['Authorization'] = "JWT " + response.data.access;
                console.log('TCL: : originalRequest 2', originalRequest)

                return axiosInstance(originalRequest);
            })
            .catch(err => {
                console.log(err)
            });
    }
    return Promise.reject(error);
}
);
export default axiosInstance