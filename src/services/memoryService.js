import axios from 'axios';

const baseURL = 'http://192.168.1.102:3000/Memories';

const addMemory = async (formData) => {
    try {
        const response = await axios.post(`${baseURL}/addMemory`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding new memory in Service: ', error);
        throw error;
    }
};

const getAllMemories = async (userId) => {
    try {
        const response = await axios.post(`${baseURL}/getAllMemories`, { userId });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching memories:', error);
        throw error;
    }
};

export { addMemory, getAllMemories };
