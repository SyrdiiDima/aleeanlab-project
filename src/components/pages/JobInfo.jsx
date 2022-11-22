import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Home } from 'components/Map/Map';
import { SliderPhoto } from 'components/SliderPhoto/Slider';
import scss from './JobInfo.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import { IoMdSquare } from 'react-icons/io';

import { ImLocation } from 'react-icons/im';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Loader from 'components/LoaderSpinner/Loader';

export const JobInfo = () => {
  const location = useLocation();
  const currentJobs = location?.state?.job;
  const [pathBack] = useState(location.state?.from ?? '/');

  return (
    <>
      {!currentJobs && <Loader />}
      {currentJobs && (
        <div className={scss.container}>
          <div className={scss.detailInfo}>
            <header className={scss.header}>
              <p className={scss.header__title}>Job Details</p>
              <div className={scss.header__navigation}>
                <div className={scss.header__saveContainer}>
                  <AiOutlineStar className={scss.header__iconStar} />
                  <BsBookmark className={scss.header__iconBookmark} />
                  <p className={scss.header__titleSave}>Save to my list</p>
                </div>
                <div className={scss.header__shareContainer}>
                  <BsFillShareFill className={scss.header__iconShare} />
                  <p className={scss.header__titleShare}>Share</p>
                </div>
              </div>
            </header>
            <section className={scss.info}>
              <div>
                <button type="button" className={scss.info__btnApplyMobile}>
                  APPLY NOW
                </button>
                <h1 className={scss.info__title}>{currentJobs.title}</h1>
                <div className={scss.info__salaryContainer}>
                  <p className={scss.info__posted}>Posted 2 days ago</p>
                  <div className={scss.info__salaryWraper}>
                    <p className={scss.info__brutto}>Brutto, per year</p>
                    <p className={scss.info__price}>€ {currentJobs.salary} </p>
                  </div>
                </div>
              </div>
              <p className={scss.info__description}>
                {currentJobs.description}
              </p>
              <h2 className={scss.info__responsopilites}>Responsopilities</h2>
              <p className={scss.info__responsopilitesDescr}>
                {currentJobs.description}
              </p>
              <h2 className={scss.info__compAndBenefits}>
                Compensation & Benefits:
              </h2>
              <p className={scss.info__compAndBenefitsDescr}>
                Our physicans enjoy a wide range of benefits, including:
              </p>
              <ul>
                {currentJobs.benefits.map(benefit => (
                  <li className={scss.info__benefit} key={nanoid()}>
                    <IoMdSquare className={scss.info__iconList} />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
              <div className={scss.info__btnBottomApply}>
                <button className={scss.info__btnBottom} type="button">
                  APPLY NOW
                </button>
              </div>
            </section>
            <section className={scss.images}>
              <h2 className={scss.images__title}>Attached images</h2>
              <div className={scss.slider}>
                <SliderPhoto
                  className={scss.images__sliderPhoto}
                  jobs={currentJobs}
                />
              </div>
              <Link to={pathBack}>
                <button className={scss.btnBack} type="button">
                  <MdOutlineKeyboardArrowLeft
                    className={scss.btnBack__btnBackIcon}
                  />
                  <p>RETURN TO JOB BOARD</p>
                </button>
              </Link>
            </section>
            <section className={scss.additionalInfo}>
              <h2 className={scss.additionalInfo__title}>Additional info</h2>
              <h3 className={scss.additionalInfo__employment}>
                Employment type
              </h3>
              <ul className={scss.emplBtns}>
                {currentJobs.employment_type.map(type => (
                  <li key={nanoid()}>
                    <div>
                      <button className={scss.emplBtn} type="button">
                        {type}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className={scss.additionalInfo__benefitTitle}>Benefits</h3>
              <ul className={scss.benefitsBtns}>
                {currentJobs.benefits.map(benefit => (
                  <li key={nanoid()}>
                    <button className={scss.benefitsBtn} type="button">
                      {benefit}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
            <section className={scss.contacts}>
              <h2 className={scss.contacts__title}>Contacts</h2>
              <div className={scss.contacts__container}>
                <div className={scss.contacts__information}>
                  <p className={scss.contacts__titleName}>
                    {currentJobs.title}
                  </p>
                  <div className={scss.contacts__cont}>
                    <ImLocation className={scss.contacts__iconLoc} />
                    <p className={scss.contacts__address}>
                      {currentJobs.address}
                    </p>
                  </div>

                  <p className={scss.contacts__email}>{currentJobs.email}</p>
                  <p className={scss.contacts__phone}>{currentJobs.phone}</p>
                  {/* <p className={scss.contacts__phone}>
                    {currentJobs.phone} <br /> {currentJobs.email}
                  </p> */}
                </div>
                <div className={scss.contacts__map}>
                  <Home location={currentJobs.location} />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};
