import React, { useEffect, useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import { getJobs, addJob, updateJob, deleteJob } from './api';

import './App.css'

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await getJobs(filter ? { status: filter } : {});
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  const handleAdd = async (job) => {
    await addJob(job);
    fetchJobs();
  };

  const handleUpdate = async (id, status) => {
    await updateJob(id, { status });
    fetchJobs();
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs();
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <JobForm onAdd={handleAdd} />
      <div className="my-4 text-center">
        <label className="font-semibold">Filter by Status: </label>
        <select
          className="ml-2 p-1 border border-gray-300 rounded"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <JobList jobs={jobs} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
