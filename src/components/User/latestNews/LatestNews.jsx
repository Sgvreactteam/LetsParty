import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../horizontalTabBar/userVenueBar/Swiper.css";

import "./latestNews.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image from "../../../assets/Rectangle103.png";
import { NavLink } from "react-router-dom";
import BgImg from "../../../assets/Vector2.png";

const fakeData = [
  {
    id: 1,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
  {
    id: 2,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
  {
    id: 3,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
  {
    id: 4,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
  {
    id: 5,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
  {
    id: 6,
    content: "Why register my establishment on Find Your Place?",
    imageUrl: image,
    cardImg: BgImg,
    date: "12 February 2024",
  },
];

function LatestNews() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    progressContent.current.style.display = "none";
  };
  return (
    <>
      <div>
        <h2 className=" text-secondary font-con text-2xl text-center my-5">
          Latest News
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {fakeData.map((venue) => (
            <SwiperSlide key={venue.id} virtualIndex={venue.id - 1}>
              <NavLink to={"/details/" + venue.id}>
                <div className="venue-card relative ">
                  <div className="relative">
                    <img
                      className="absolute rounded-md"
                      src={venue.cardImg}
                      alt=""
                    />
                    <img
                      className=" w-full h-56 object-cover object-center rounded-md "
                      src={venue.imageUrl}
                      alt={venue.name}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white font-con text-sm p-3">
                      {venue.content}
                      <div className="mt-28">{venue.date}</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress">
            <svg className=" h-12" ref={progressCircle}></svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default LatestNews;
