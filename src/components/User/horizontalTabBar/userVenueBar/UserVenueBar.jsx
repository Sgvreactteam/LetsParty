import React, { useRef, useState } from "react";
import {  Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
import img1 from '../../../../assets/v1.png'
import img2 from '../../../../assets/v2.png'
import img3 from '../../../../assets/v3.png'
import img4 from '../../../../assets/v4.png'
import person from '../../../../assets/Vector.png'
import group from '../../../../assets/Group.png'


function UserVenueBar(props) {

  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   progressContent.current.style.display = "none";
  // };

  const handleSwiperInit = (swiper) => {
    props.setSwiperRef(swiper);
    swiper.update();
  };

  const fakeData = [
    {
      id: 1,
      name: "Castle name 1",
      imageUrl: img1,
      personImg: person,
      groupImg: group,
    },
    {
      id: 2,
      name: "Castle name 2",
      imageUrl: img2,
      personImg: person,
      groupImg: group,
    },
    {
      id: 3,
      name: "Castle name 3",
      imageUrl: img3,
      personImg: person,
      groupImg: group,
    },
    {
      id: 4,
      name: "Castle name 4",
      imageUrl: img4,
      personImg: person,
      groupImg: group,
    },
    {
      id: 5,
      name: "Castle name 3",
      imageUrl: img1,
      personImg: person,
      groupImg: group,
    },
    {
      id: 6,
      name: "Castle name 3",
      imageUrl: img2,
      personImg: person,
      groupImg: group,
    },
  ];

  return (
    <div className="relative">
      <div className="z-10">
         <h3>Castles</h3>
        <Swiper
          modules={[ Navigation, Pagination, Autoplay]}
          onSwiper={handleSwiperInit}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          navigation={false} 
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {fakeData.map((venue) => (
           <SwiperSlide key={venue.id} virtualIndex={venue.id - 1}>
           <div className="relative">
             <NavLink to={"/details/" + venue.id}>
               <img
                 className="w-full h-56 object-cover object-center rounded-md"
                 src={venue.imageUrl}
                 alt={venue.name}
               />
               <div className="absolute top-0 right-0 mt-2 mr-3">
                 <FaHeart size={25} style={{ color: "#D9D9D9" }} />
               </div>
             </NavLink>
             <div className="py-3">
               <NavLink to={"/details/" + venue.id}>
                 <h3 className="text-lg font-semibold mb-2 text-[#1A2737] font-pop">
                   {venue.name}
                 </h3>
                 <h3 className="text-[#151515] font-lato">City name</h3>
               </NavLink>
               {props.currentPage == 0 ? (
                 <div className="grid grid-cols-2 mt-2 text-[#8D303A] font-lato">
                   <div className="flex gap-3">
                     <img className="w-8 h-8" src={venue.personImg} alt="" />
                     <div className="flex flex-col text-sm">
                       <span>200</span>
                       <span>persons</span>
                     </div>
                   </div>
                   <div className="flex gap-3">
                     <img className="w-8 h-8" src={venue.groupImg} alt="" />
                     <div className="flex flex-col text-sm">
                       <span>100</span>
                       <span>persons</span>
                     </div>
                   </div>
                 </div>
               ) : (
                 <></>
               )}
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
      <div
        className="absolute top-[40%] -mt-4 -left-8 cursor-pointer z-1000"
        onClick={() => props.swiperRef.slidePrev()}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="28.000000"
            height="49.000000"
            viewBox="0 0 38 59"
            fill="none"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector 6"
              d="M27.8525 0.62561L0.771484 27.7168C0.189453 28.2793 -0.625977 29.7961 0.771484 31.363L27.8525 58.4542C28.5557 58.8661 30.2021 59.4426 31.166 58.4542L37.2812 52.3369C37.7129 51.7744 38.3174 50.3601 37.2812 49.2029L17.8213 29.4646L37.2812 10.0879C37.8232 9.46521 38.583 7.91223 37.2812 6.68274L31.166 0.62561C30.5342 0.153564 28.9854 -0.507446 27.8525 0.62561Z"
              fill="#352C80"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute top-[40%] -mt-4 -right-8 cursor-pointer"
        onClick={() => props.swiperRef.slideNext()}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="28.000000"
            height="49.000000"
            viewBox="0 0 38 59"
            fill="none"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector 5"
              d="M10.1475 0.62561L37.2285 27.7168C37.8105 28.2793 38.626 29.7961 37.2285 31.363L10.1475 58.4542C9.44434 58.8661 7.79785 59.4426 6.83398 58.4542L0.71875 52.3369C0.287109 51.7744 -0.317383 50.3601 0.71875 49.2029L20.1787 29.4646L0.71875 10.0879C0.176758 9.46521 -0.583008 7.91223 0.71875 6.68274L6.83398 0.62561C7.46582 0.153564 9.01465 -0.507446 10.1475 0.62561Z"
              fill="#352C80"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default UserVenueBar;
