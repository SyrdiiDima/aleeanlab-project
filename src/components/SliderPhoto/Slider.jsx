import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';
import scss from './SliderPhoto.module.scss';

export const SliderPhoto = ({ jobs }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // <div className={scss.slider}>
    //   <Slider {...settings}>
    //     {jobs.pictures.map(pic => (
    //       <ul key={nanoid()}>
    //         <div className={scss.container}>
    //           {' '}
    //           <li>
    //             <img src={pic} alt="picName"></img>
    //           </li>
    //         </div>
    //       </ul>
    //     ))}
    //   </Slider>
    // </div>
    <div className={scss.slider}>
      <Slider {...settings}>
        {jobs.pictures.map(pic => (
          <ul key={nanoid()}>
            {' '}
            <li>
              <div className={scss.container}>
                <img src={pic} alt="picName"></img>
              </div>
            </li>
          </ul>
        ))}
      </Slider>
    </div>
  );
};
