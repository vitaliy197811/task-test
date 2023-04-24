import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

let config = {
  headers: {
    Authorization: localStorage.getItem('token'),
  },
};

export const RegisterUser = async user => {
  try {
    const { data } = await axios.post(`/auth/sign-up`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async user => {
  try {
    const { data } = await axios.post(`/auth/sign-in`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async () => {
  
  try {
    const { data } = await axios.get(`/track`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};