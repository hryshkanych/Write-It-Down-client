import axios from 'axios';
import { useUserContext } from '../contexts/userContext';

const baseURL = 'http://192.168.1.103:3000/Users';

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
    // const { setUser } = useUserContext();
    console.log('in login ', newUser);
    const response = await axios.post(`${baseURL}/login`, newUser);
    // setUser(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { signupUser, loginUser };
