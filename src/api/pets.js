import axios from 'axios';
import { API } from './constants';

export const fetchPets = async () => {
  const response = await axios.get(`${API}/pets`);

  return await response.data;
};
