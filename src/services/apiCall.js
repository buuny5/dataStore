import axios from 'axios';
export function getReq(url) {
  return axios.get(url)
}