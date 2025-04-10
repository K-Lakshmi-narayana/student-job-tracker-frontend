import React from 'react';
import JobItem from './JobItem';

function JobList({ jobs, onUpdate, onDelete }) {
  if (jobs.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No job applications found.</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {jobs.map((job) => (
        <JobItem key={job._id} job={job} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default JobList;
