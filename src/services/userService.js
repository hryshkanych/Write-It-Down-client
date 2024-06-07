import axios from 'axios';

const baseURL = 'http://192.168.1.102:3000/Users';

const signupUser = async (newUser) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, newUser);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (newUser) => {
  try {
    const response = await axios.post(`${baseURL}/login`, newUser);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { signupUser, loginUser };
