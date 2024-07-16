import React from 'react';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';

const Home = () => (
  <div className="p-4">
    <SearchBar />
    <JobList />
  </div>
);

export default Home;
