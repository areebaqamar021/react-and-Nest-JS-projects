import axios from 'axios';

const API_URL = 'http://localhost:3000/pharmacy'; // Backend URL

export const getPharmacies = () => axios.get(API_URL);
export const getPharmacyById = (id) => axios.get(`${API_URL}/${id}`);
export const createPharmacy = (pharmacy) => axios.post(API_URL, pharmacy);
export const updatePharmacy = (id, pharmacy) => axios.patch(`${API_URL}/${id}`, pharmacy);
export const deletePharmacy = (id) => axios.delete(`${API_URL}/${id}`);
