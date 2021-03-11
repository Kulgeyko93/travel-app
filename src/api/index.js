import axios from 'axios';

const BASE_URL = 'https://travel-app-demo.herokuapp.com';

axios.interceptors.request.use(
  function handleRequest(config) {
    return {
      ...config,
      url: `${BASE_URL}${config.url}`,
    };
  },
  function handleRequestError(error) {
    return Promise.reject(error);
  },
);

export default axios;
