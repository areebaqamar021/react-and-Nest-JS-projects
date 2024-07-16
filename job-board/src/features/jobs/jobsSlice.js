import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobs: [
      {
        id: 1,
        title: 'Backend .Net Developer',
        companyName: 'Netflix',
        companyLogo: 'https://path.to/logo/netflix.png',
        salary: '$13k/month',
        location: 'Remote',
        description: 'Netflix is seeking a highly skilled and motivated Backend .NET Developer...',
        skills: ['Fullstack', 'Angular', 'Azure', 'C#']
      },
       {
        id: 2,
        title: 'Frontend ReactJS Developer',
        companyName: 'Netflix',
        companyLogo: 'https://path.to/logo/netflix.png',
        description: 'Netflix is seeking a highly skilled and motivated Backend .NET Developer to join our talented engineering team.',
        skills: ['Fullstack', 'Angular', 'Azure', 'C#'],
        salary: '$13k/month',
        applicants: 100,
      },
      {
        id: 3,
        title: 'Mid Fullstack Developer',
        companyName: 'Google',
        companyLogo: 'https://path.to/logo/netflix.png',
        description: 'Google is looking for a mid-level fullstack developer to work on innovative projects.',
        skills: ['Fullstack', 'Angular', 'Azure', 'C#'],
        salary: '$15k/month',
        applicants: 150,
      },
      // Add more job data here
    ],
    searchTerm: '',
  };
  

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = jobsSlice.actions;
export default jobsSlice.reducer;
