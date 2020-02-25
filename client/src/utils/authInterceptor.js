import axios from 'axios';
import { getSession } from './localStorageHelper';

const api = 'http://localhost:3000/api'

const getAuthorizationHeader = () => (getSession() ? { Authorization: `Bearer ${getSession()}` } : {});

const genericHeaders = () => ({
  'content-type': "application/json",
  ...getAuthorizationHeader()
});

const apiCallGet = (url,headers) => {
  return (axios.get(api + url,
    { headers: { ...genericHeaders(), ...headers } })
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    }));
}

const apiCallPost = (url, data, headers) => {
  return (axios.post(api + url,
    data,
    { headers: { ...genericHeaders(), ...headers } })
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    }));
}

export { apiCallPost, apiCallGet };
