import { useEffect, useState } from 'react';
import { fetchJobList } from 'components/api/api';
import { Link } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';
import scss from './JobList.module.scss';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import Loader from 'components/LoaderSpinner/Loader';
export const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetchJobList().then(arrgs => setJobs(arrgs));
    setLoading(false);
  }, []);

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJob = jobs.slice(firstJobIndex, lastJobIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);
  console.log(jobs);

  return (
    <>
      {!currentJob && <Loader />}
      {currentJob && (
        <div className={scss.container}>
          <ul>
            {currentJob.map(job => {
              return (
                <li className={scss.list} key={job.id}>
                  <div className={scss.list__wrapper}>
                    <div className={scss.list__photo}></div>
                    <div className={scss.list__description}>
                      <div className={scss.list__header}>
                        <div className={scss.list__star}>
                          <AiTwotoneStar className={scss.list__starIcon} />
                          <AiTwotoneStar className={scss.list__starIcon} />
                          <AiTwotoneStar className={scss.list__starIcon} />
                          <AiTwotoneStar className={scss.list__starIcon} />
                          <AiTwotoneStar className={scss.list__starIcon} />
                        </div>
                        <p className={scss.list__posted}>Posted 2 days ago</p>
                      </div>
                      <Link to={{ pathname: `${job.id}` }} state={{ job: job }}>
                        <p className={scss.list__title}>{job.title}</p>
                      </Link>

                      <p className={scss.list__department}>
                        Department name • {job.name}
                      </p>

                      <div className={scss.list__address}>
                        <HiOutlineLocationMarker
                          className={scss.list__addressIcon}
                        />
                        <p className={scss.list__addressName}>{job.address}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={scss.pagination}>
            <Pagination
              jobsPerPage={jobsPerPage}
              totalJobs={jobs.length}
              paginate={paginate}
            />

            <button onClick={prevPage} className={scss.prevButton}>
              <IoIosArrowBack className={scss.iconArrowLeft} />
            </button>
            <button onClick={nextPage} className={scss.nextButton}>
              <IoIosArrowForward className={scss.iconArrowRigth} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
