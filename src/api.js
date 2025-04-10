import axios from 'axios';

const API_BASE = "https://student-job-tracker-backend-e14l.onrender.com/api";

export const getJobs = (params) => axios.get(`${API_BASE}/jobs`, { params });

export const addJob = (job) => axios.post(`${API_BASE}/jobs`, job);

export const updateJob = (id, update) => axios.put(`${API_BASE}/jobs/${id}`, update);

export const deleteJob = (id) => axios.delete(`${API_BASE}/jobs/${id}`);
