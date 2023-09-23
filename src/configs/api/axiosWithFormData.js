import { serverURL } from '@/@core/utlis/secreVariable';
import axios from 'axios';

const axiosWithFormData = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
    Authorization: `Bearer `,
  },
});

export default axiosWithFormData;
