import React, { useState } from "react";
import Input from "../../../../../ui/Input";
import AddImages from "../../../../../ui/AddImages";
import Button from "../../../../../ui/Button";

function ServicesForm() {
  return (
    <div className=" ">
    <div className="text-[#8D303A] text-2xl font-con border-b-[1px] border-borde py-5">
      Create Announcement
    </div>
    <div className=" max-w-[1220px]">
      <p className="mt-8 font-con "> Services </p>
      <form className="" action="">
        <div className="flex flex-wrap mt-8 font-pop">
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
            <Input
              placeholder="Website"
              type="website"
              classes="large"
            ></Input>
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
            <label htmlFor="">Minimum budget</label>
            <Input
              placeholder="Minimum budget"
              type="number"
              classes="large"
            ></Input>
          </div>
        </div>
        <div className=" grid grid-cols-2">
          <div className="flex flex-col w-[100%]">
            <p>Upload of pictures (max 15)</p>
            <AddImages />
          </div>
        </div>
      </form>
      <div className="flex justify-between w-full mt-8 mb-8">
        <Button type="grayButton">Back</Button>
        <Button type="purpleButton" to="/myannouncementss">Next</Button>
      </div>
    </div>
  </div>
  )
}

export default ServicesForm