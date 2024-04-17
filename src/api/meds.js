import axios from 'axios';
import { API } from './constants';

export const fetchMeds = async () => {
  const response = await axios.get(`${API}/meds`);

  return await response.data;
};

export const addMed = async (data) => {
  const response = await axios.post(`${API}/meds`, data);

  return await response.data;
};