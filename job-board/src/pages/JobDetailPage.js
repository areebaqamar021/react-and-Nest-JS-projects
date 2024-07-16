import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JobDetail from '../components/JobDetail';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = useSelector((state) => state.jobs.jobs.find((job) => job.id === parseInt(id)));

  return (
    <div className="p-4">
      {job ? <JobDetail job={job} /> : <p>Job not found</p>}
    </div>
  );
};

export default JobDetailPage;
