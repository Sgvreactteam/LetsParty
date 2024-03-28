import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../../../../../assets/Rectangle103.png"
import { FaHeart } from "react-icons/fa";

import image from '../../../../assets/Rectangle103.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../userVenueBar/Swiper.css";

function UserEntertainmentBar() {
  const [swiperRef, setSwiperRef] = useState(null);

  const handleSwiperInit = (swiper) => {
    setSwiperRef(swiper);
    swiper.update();
  };

  const EntertainmentData = [
    {
     id:"1",
     name:"Entertainment 1",
     imageUrl:image,
    },
    {
      id: 2,
      name: "Castle name 2",
      imageUrl:image,
    },
    {
      id: 3,
      name: "Castle name 3",
      imageUrl:image,
    }, 
    {
      id: 4,
      name: "Castle name 4",
      imageUrl:image,
    },
    {
      id: 5,
      name: "Castle name 3",
      imageUrl:image,
    },
    {
      id: 6,
      name: "Castle name 3",
      imageUrl:image,
    },
  ];

  return (
    <div className="relative">
      <div className="px-16">
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
          {EntertainmentData.map((venue) => (
            <NavLink to={"/details/" + venue.id}>
            <SwiperSlide key={venue.id} virtualIndex={venue.id - 1}>
              <div className="venue-card relative">
                <img
                  className="w-full h-56 object-cover object-center rounded-md"
                  src={venue.imageUrl}
                  alt={venue.name}
                />
                 <div className=" absolute top-0 right-0 mt-2 mr-3">
                <FaHeart size={25} style={{ color: "#D9D9D9" }} />
                </div>
                <div className="p-4">
                  
                  <h3 className="text-[#151515] font-lato">City name</h3>
                </div>
              </div>
            </SwiperSlide>
            </NavLink>
          ))}
        </Swiper>
      </div>
      <div
        className="absolute top-[40%] -mt-4 left-4 cursor-pointer"
        onClick={() => swiperRef.slidePrev()}
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
        className="absolute top-[40%] -mt-4 right-4 cursor-pointer"
        onClick={() => swiperRef.slideNext()}
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
  )
}

export default UserEntertainmentBar