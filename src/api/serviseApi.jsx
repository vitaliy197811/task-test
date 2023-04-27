import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
const token = localStorage.getItem('token');

let config = {
  headers: {
    'Authorization': token,
  },
};

export const registerUser = async user => {
  try {
    const { data } = await axios.post(`/auth/sign-up`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async user => {
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

export const create = async task => {
  try {
    const { data } = await axios.post(`/track`, task, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const edit = async (id, task) => {
  try {
    console.log(task);
    const { data } = await axios.patch(`/track/:${id}`, task);
    return data;
  } catch (error) {
    console.log(error);
  }
};