import axios from 'axios';
import { API } from './constants';

export const fetchPets = async () => {
  const response = await axios.get(`${API}/pets`);

  return await response.data;
};

export const addPet = async (data) => {
    const response = await axios.post(`${API}/pets`, data);
  
    return await response.data;
  };

export const deletePet = async (id) => {
    const response = await axios.delete(`${API}/pets/${id}`);
  
    return await response.data;
  };
