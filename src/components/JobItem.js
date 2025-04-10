import React from 'react';

function JobItem({ job, onUpdate, onDelete }) {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="space-y-1">
        <h3 className="font-bold text-lg text-indigo-700">Role: {job.role}</h3>
        <p className="text-gray-600">Company: {job.company}</p>
        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            {job.link}
          </a>
        )}
        <p className="text-sm text-gray-500">
          Applied on: {new Date(job.date).toLocaleDateString()}
        </p>
        <p className="text-sm">
          Status: <span className="font-semibold">{job.status}</span>
        </p>
      </div>

      <div className="flex gap-2 mt-4 sm:mt-0 sm:ml-4">
        <select
          value={job.status}
          onChange={(e) => onUpdate(job._id, e.target.value)}
          className="border p-1 rounded text-sm"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button
          onClick={() => onDelete(job._id)}
          className="text-red-600 border border-red-600 px-2 py-1 rounded text-sm hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobItem;
