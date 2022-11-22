// import { fetchJobList } from './api/api';

import { Routes, Route } from 'react-router-dom';
import { JobList } from './pages/JobList';
import { JobInfo } from './pages/JobInfo';
export const App = () => {
  // fetchJobList();

  return (
    <>
      <Routes>
        <Route path="/" element={<JobList />}></Route>
        <Route path="/:jobId" element={<JobInfo />}></Route>
      </Routes>
    </>
  );
};
