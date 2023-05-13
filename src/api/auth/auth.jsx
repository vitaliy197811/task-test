import axios from 'axios';

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

export const loginUser = async user => {
  try {
    const { data } = await axios.post(`/auth/sign-in`, user);
    return data;
  } catch (error) {
    console.log(error);
  }
};