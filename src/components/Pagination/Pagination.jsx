import { NavLink } from 'react-router-dom';
import scss from './Pagination.module.scss';
const Pagination = ({ jobsPerPage, totalJobs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={scss.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={scss.number}>
            <NavLink
              onClick={() => paginate(number)}
              className={currentPage === number ? scss.activeLink : scss.link}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
