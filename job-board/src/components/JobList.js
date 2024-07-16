import React from 'react';
import { useSelector } from 'react-redux';
import JobItem from './JobItem';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const searchTerm = useSelector((state) => state.jobs.searchTerm);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      {filteredJobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
