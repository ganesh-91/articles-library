import axios from 'axios';
import { getSession } from './localStorageHelper';

const api = 'http://localhost:3000/api'
// const api = 'https://art-lib.herokuapp.com/api'

const getAuthorizationHeader = () => (getSession() ? { Authorization: `Bearer ${getSession()}` } : {});

const genericHeaders = () => ({
  'content-type': "application/json",
  ...getAuthorizationHeader()
});

const apiCallGet = (url, headers) => {
  return (axios.get(api + url,
    { headers: { ...genericHeaders(), ...headers } }));
}

const apiCallPost = (url, data, headers) => {
  return (axios.post(api + url,
    data,
    { headers: { ...genericHeaders(), ...headers } }));
}

const apiCallPut = (url, data, headers) => {
  return (axios.put(api + url,
    data,
    { headers: { ...genericHeaders(), ...headers } }));
}

const apiCallDelete = (url, data, headers) => {
  return (axios.delete(api + url,
    data,
    { headers: { ...genericHeaders(), ...headers } }));
}

export { apiCallPost, apiCallGet, apiCallPut, apiCallDelete };
