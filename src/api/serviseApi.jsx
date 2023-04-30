import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
const token = localStorage.getItem('token');

let config = {
  headers: {
    Authorization: token,
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

export const loginAdmin = async user => {
  try {
    const { data } = await axios.post(`/auth/sign-in`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`/users`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersTask = async id => {
  try {
    const { data } = await axios.get(`/track/${id}`, config);
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

export const createTask = async task => {
  try {
    const { data } = await axios.post(`/track`, task, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (id, task) => {
  try {
    const { data } = await axios.patch(`/track/${id}`, task, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const delTask = async id => {
  try {
    const { data } = await axios.delete(`/track/${id}`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};