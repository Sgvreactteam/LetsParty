import React, { useState } from "react";
import Button from "../../../ui/Button";
import { useLocation } from "react-router-dom";
import UserVenueBar from "../horizontalTabBar/userVenueBar/UserVenueBar";
import UserEntertainmentBar from "./userEntertainmentBar/UserEntertainmentBar";

function HorizonatalTabBar() {
  const location = useLocation();
  const [swiperRef, setSwiperRef] = useState(null);
  const [selected, setSelected] = useState(0);

  console.log(swiperRef, "swiperRef");
  const handleRegButtonClick = (index) => {
    setSelected(index);
  };

  const VenueBarArr = [
    {
      title: "Top Venues",
      to: "/landingPage",
    },
    {
      title: "Top Entertainment",
      to: "/landingPage",
    },
    {
      title: "Top Rental",
      to: "/landingPage",
    },
    {
      title: "Top Services",
      to: "/landingPage",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-10 w-full flex-wrap mt-6 mb-6">
        {VenueBarArr &&
          VenueBarArr.map((item, index) => {
            return (
              <Button
                type={selected == index ? "homeTabBarChange" : "homeTabBar"}
                to={item.to}
                onClick={() => {
                  handleRegButtonClick(index);
                  swiperRef.slideTo(0, 0);
                }}
              >
                {item.title}
              </Button>
            );
          })}
      </div>
      {location.pathname === "/landingPage" && (
        <UserVenueBar
          setSwiperRef={setSwiperRef}
          swiperRef={swiperRef}
          currentPage={selected}
        />
      )}
      {/* {/ {location.pathname === '/Homepage/Entertainment' && <UserEntertainmentBar/>} /} */}
    </div>
  );
}

export default HorizonatalTabBar;
