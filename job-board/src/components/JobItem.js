import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ({ job }) => (
  <div className="border border-gray-300 rounded-lg p-4">
    <Link to={`/job/${job.id}`}>
      <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12" />
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-500">{job.companyName}</p>
      <div className="flex justify-between mt-2">
        <span className="text-gray-600">{job.salary}</span>
        <span className="text-gray-600">{job.location}</span>
      </div>
    </Link>
  </div>
);

export default JobItem;
