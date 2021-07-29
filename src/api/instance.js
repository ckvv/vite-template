import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000,
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

instance.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error(error);
    return null;
  },
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return null;
  },
);

export default instance;
