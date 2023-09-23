import { serverURL } from '@/@core/utlis/secreVariable';
import axios from 'axios';
//const userData = JSON.parse(localStorage.getItem("userCredential"))

const axiosWithCredential = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Authorization: `Bearer `,
  },
});

export default axiosWithCredential;
