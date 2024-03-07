import React, { useState } from "react";
import Input from "../../../../../ui/Input";
import AddImages from "../../../../../ui/AddImages";
import Button from "../../../../../ui/Button";
const VenuesForm = () => {
  const checkBoxArry = [
    {
      Heading: "Indicate whether the following criteria are fulfilled ",
      labels: [
        { id: "1", label: "as resquested by host" },
        { id: "1", label: "as resquested by host" },
        { id: "1", label: "as resquested by " },
        { id: "1", label: "as resquested by host" },
        { id: "1", label: " resquested by host" },
        { id: "1", label: "as resquested by host" },
        { id: "1", label: "as resquested by host" },
        { id: "1", label: "as " },
        { id: "1", label: "as resquested by host" },
      ],
    },
  ];
  return (
    <div className=" ">
      <div className="text-[#8D303A] text-2xl font-con border-b-[1px] border-borde py-5">
        Create Announcement
      </div>
      <div className=" max-w-[1220px]">
        <p className="mt-8 font-con text-[18px]">Venues</p>
        <form className="flex flex-wrap mt-8 font-pop" action="">
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Name</label>
            <Input placeholder="Name" type="text" classes="large"></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Phone Number</label>
            <Input
              placeholder="Phone Number"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Website</label>
            <Input placeholder="Website" type="website" classes="large"></Input>
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="">Address</label>
            <Input placeholder="Address" type="text" classes="large"></Input>
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="">Description</label>
            <Input
              placeholder="Description"
              type="text"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Venue Size (in square meters)</label>
            <Input
              placeholder="Venue Size"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Maximum Capacity Sitting</label>
            <Input
              placeholder="Maximum Capacity Sitting"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Maximum Capacity Standing</label>
            <Input
              placeholder="Maximum Capacity Standing"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Maximum Parking Space</label>
            <Input
              placeholder="Maximum Parking Space"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">Catering choice</label>
            <select
              className="p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]"
              name="Catering Choice"
              id=""
            >
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div className="flex flex-col w-[33%]">
            <label htmlFor="">The kind of cuisine you cook</label>
            <select
              className="p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]"
              name="Catering Choice"
              id=""
            >
              <option value="Dinner">Traditional</option>
              <option value="Lunch">Chinese</option>
              <option value="Dinner">Italian</option>
              <option value="Dinner">Mexican</option>
            </select>
          </div>

          <div className="flex flex-col w-[100%]">
            <p>Upload of pictures (max 15)</p>
            <AddImages />
          </div>

          <div className="mt-5 flex flex-col gap-4">
            {checkBoxArry &&
              checkBoxArry.map((item, index) => {
                return (
                  <div className=" " key={index}>
                    <h3 className="text-2xl font-con pb-2">{item.Heading} </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.labels.map((labelData, idx) => (
                        <div
                          className="flex justify-start items-baseline basis-52"
                          key={idx}
                        >
                          <input
                            type="checkbox"
                            id={labelData.id}
                            className=" checkbox-input p-1"
                          />{" "}
                          <label
                            htmlFor={labelData.id}
                            className="font-pop ps-2"
                          >
                            {labelData.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </form>

        <div className="flex justify-between w-full mt-8 mb-8">
          <Button type="grayButton" >Back</Button>
          <Button type="purpleButton"to="/myannouncementss">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default VenuesForm;
