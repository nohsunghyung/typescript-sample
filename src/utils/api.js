import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST + '/api',
  withCredentials: true
});

api.defaults.timeout = 30000;
api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

api.interceptors.response.use(
  function (config) {
    console.log('로딩');
    return config;
  },
  function (error) {
    const response = error.response;
    switch (response.status) {
      case 401:
        console.log(response.data.message);
        break;

      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default api;
