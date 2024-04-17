import axios from 'axios';
import { API } from './constants';

export const fetchLogs = async (id) => {
  const response = await axios.get(`${API}/logs/${id}`);

  return await response.data;
};

export const addLog = async (data) => {
  const response = await axios.post(`${API}/logs`, data);

  return await response.data;
};