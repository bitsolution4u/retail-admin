// import { serverURL } from "@/@core/utlis/secreVariable";
import axios from 'axios';
axios.defaults.withCredentials = true;
console.log(serverURL);
const fetcher = axios.create({
  baseURL: 'http://localhost:5000',
});

export default fetcher;
