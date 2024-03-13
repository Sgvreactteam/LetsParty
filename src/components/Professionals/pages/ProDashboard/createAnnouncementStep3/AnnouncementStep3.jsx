import { React, useState } from "react";    
import "../../../../../styles/checkbox.css"
import Button from "../../../../../ui/Button";
import vectorImg from "../../../../../assets/Frame.svg";
import { t } from "i18next";
import { BsFillInfoCircleFill } from "react-icons/bs";
import './Tooltip.css'
function AnnouncementStep3() {
  const headingsData = [
    {
      heading: "Accepted Events",
      labels: [
        { id: "1", label: "Birthday" },
        { id: "2", label: "Wedding " },
        { id: "3", label: "Anniversary" },
        { id: "4", label: "Family Gathering" },
        { id: "5", label: "Concert/Theatre Show" },
        { id: "7", label: "Product Launch" },
        { id: "8", label: "After Work" },
        { id: "9", label: "Conference" },
        { id: "10", label: "Business Meeting" },
        { id: "11", label: "Gala/Ceremony" },
        { id: "12", label: "Public Party" },
        { id: "13", label: "Social Events" },
        { id: "14", label: "Reception" },
        { id: "15", label: "General Assembly" },
      ],
    },
  ];
  const [highlighted, setHighlighted] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const handleCheckboxChange = () => {
    setHighlighted(!highlighted);
    setReadOnly(!readOnly);
  };
  // const highlightedd = {
  //   backgroundColor: "yellow" / Adjust this to your desired highlight color /,
  // };
  return (
    <>
      <div className="text-2xl text-secondary  font-con border-b-[1px] border-borde py-5 px-10">{t('createAnn')}</div>
      <div className="mt-3 px-10">
        {headingsData.map((headingData, index) => (
          <div key={index}>
            <h2 className="text-2xl font-con  pb-2">{headingData.heading}</h2>
            <div className="flex flex-wrap gap-2 ">
              {headingData.labels.map((labelData, idx) => (
                <div
                  className="flex justify-start items-baseline basis-1/5"
                  key={idx}
                >
                  <input
                    type="checkbox"
                    id={labelData.id}
                    className="checkbox-input p-1"
                  />
                  <label htmlFor={labelData.id} className="font-pop ps-2">
                    {labelData.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 px-10">
        <h2 className="text-2xl font-con  pb-2">Accepted Kinds Of Booking</h2>
        <div className="flex flex-wrap gap-2">
          <div className=" flex justify-start items-baseline ">
            <input type="checkbox" className="checkbox-input p-1" />
            <label htmlFor="" className="font-pop ps-2 ">
              Allow Booking Of Tables
            </label>
          </div>

          <div className=" flex justify-start items-baseline ">
            <input
              type="checkbox"
              className="checkbox-input p-1"
              onClick={handleCheckboxChange}
            />
            <label htmlFor="" className="font-pop ps-2 ">
              Allow Privatisation Of The Venue
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Minium Budget"
              readOnly={readOnly}
              className={`ms-3 border-2 focus:outline-none px-2 ${
                highlighted ? "highlightedd" : "hight"
              }`}
            />
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-3 px-10">
        <div className="flex   pb-2">
          <h2 className="text-2xl font-con flex items-center gap-2">Premium Announcement <span className="info-icon" title="Do you want to create your announcement as Premium or Standard?"> <BsFillInfoCircleFill className="info-icon" color="#8D303A" size={16} /></span></h2>{" "}
          {/* <Box sx={{ width: 40 }}>
            <Grid container justifyContent="center">
              <Grid item>
                <Tooltip
                  title="Do You Want To Create Your Announcement As Standard Or Premium ?"
                  placement="top"
                >
                  <img
                    src={vectorImg}
                    alt=""
                    className="w-[12px] h-[12px] rounded-xl bg-red-900"
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Box> */}
        </div>
        <div className="flex flex-wrap gap-2">
          <div className=" flex justify-start items-baseline ">
            <input type="checkbox" className="checkbox-input p-1" />
            <label htmlFor="" className="font-pop ps-2 ">
              Standard Announcement
            </label>
          </div>
          <div className=" flex justify-start items-baseline ">
            <input type="checkbox" className="checkbox-input p-1" />
            <label htmlFor="" className="font-pop ps-2 ">
              Premium Announcement
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-16 px-10">
        <Button type="grayButton">Back</Button>
        <Button type="purpleButton">Submit</Button>
      </div>
    </>
  );
}
export default AnnouncementStep3;

