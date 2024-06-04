import axios from 'axios';

const baseURL = 'http://172.20.10.2:3000/Users';

const signupUser = async (newUser) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, newUser);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (user) => {
  try {
    console.log('Service, user:  '+user);
    const response = await axios.post(`${baseURL}/login`, user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { signupUser, loginUser };
