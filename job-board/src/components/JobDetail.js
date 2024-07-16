import React from 'react';

const JobDetail = ({ job }) => (
  <div className="p-4 border border-gray-300 rounded-lg">
    <div className="flex items-center">
      <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-500">{job.companyName}</p>
        <p className="text-gray-600">{job.salary}</p>
      </div>
    </div>
    <p className="mt-4">{job.description}</p>
    <div className="mt-4">
      {job.skills.map((skill) => (
        <span key={skill} className="bg-gray-200 p-2 rounded-lg mr-2">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default JobDetail;
