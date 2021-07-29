import axios from 'axios';
import qs from 'qs';
import { getToken } from '@/utils/util';

const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://localhost:8001/api',
  timeout: 60000,
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers.token = getToken();
    return config;
  },
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
