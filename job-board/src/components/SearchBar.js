import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/jobs/jobsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.jobs.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Find a job"
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mr-2"
      />
      <button className="bg-pink-500 text-white p-2 rounded-lg">Search</button>
    </div>
  );
};

export default SearchBar;
