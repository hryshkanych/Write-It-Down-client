import axios from 'axios';

const baseURL = 'http://192.168.0.104:3000/Memories';

const addMemory = async (formData) => {
    try {

        console.log('in adddddddd');
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

const deleteMemoryById = async (memoryId) => {
    try {
        const response = await axios.delete(`${baseURL}/deleteMemory/${memoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting memory:', error);
        throw error;
    }
};

const updateMemoryById = async (memoryId, textNote) => {
    try {
        const response = await axios.put(`${baseURL}/updateMemory/${memoryId}`, { textNote });
        return response.data;
    } catch (error) {
        console.error('Error updating memory:', error);
        throw error;
    }
};



export { addMemory, getAllMemories, deleteMemoryById, updateMemoryById };
