import { Card, List, ListItem } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../assets/logo.png";

export function Sidebar({ onClose }) {
  const [list, setList] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleClickList = (index) => {
    setList(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card
      className={`w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 font-pop ${
        isMobile ? "absolute top-0 left-0 h-screen z-[999]" : ""
      }`}
    >
      <div>
        {isMobile && (
          <div className="flex justify-between ">
            <div>
              <img
                src={logo}
                alt="logoImage"
                className="lg:w-[165px] lg:h-[63px] sm:w-[100px] sm:h-[50px] w-[80px] h-[30px]"
              />
            </div>

            <IoCloseSharp onClick={onClose} className="cursor-pointer" />
          </div>
        )}
        <List className="flex flex-col text-lg gap-2">
          {[
            {
              link: "/ProfessionalDashboard",
              title: "Create Announcement",
            },
            {
              link: "/myaccount",
              title: "my Account",
            },
            {
              link: "/myannouncements",
              title: "My Announcements",
            },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={list == index ? "text-[#6757EC]" : ""}
              onClick={handleClickList.bind(this, index)}
            >
              <ListItem>{item.title}</ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Card>
  );
}
