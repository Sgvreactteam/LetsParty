import React, { useState } from "react";
import Input from "../../../../../ui/Input";
import AddImages from "../../../../../ui/AddImages";
import Button from "../../../../../ui/Button";
import { t } from "i18next";

function ServicesForm() {
  return (
    <div className=" ">
    <div className="text-[#8D303A] text-2xl font-con border-b-[1px] border-borde py-5 px-10">
      Create Announcement
    </div>
    <div className=" max-w-[1220px] px-10">
      <p className="mt-8 font-con "> Services </p>
      <form className="" action="">
        <div className="flex flex-wrap mt-8 font-pop">
          <div className="flex flex-col md:w-[33%] w-full">
            <label htmlFor="">Name</label>
            <Input placeholder="Name" type="text" classes="large"></Input>
          </div>
          <div className="flex flex-col md:w-[33%] w-full">
            <label htmlFor="">Phone Number</label>
            <Input
              placeholder="Phone Number"
              type="number"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col md:w-[33%] w-full">
            <label htmlFor="">Website</label>
            <Input
              placeholder="Url..."
              type="website"
              classes="large"
            ></Input>
          </div>
          <div className="flex flex-col md:w-[50%] w-full">
            <label htmlFor="">Address</label>
            <Input placeholder="Address" type="text" classes="textarea"></Input>
          </div>
          <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('Description (EN)')}</label>
                <Input placeholder={t('description')} type="text" classes="textarea"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('Description (DE)')}</label>
                <Input placeholder={t('description')} type="text" classes="textarea"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('Description (FR)')}</label>
                <Input placeholder={t('description')} type="text" classes="textarea"></Input>
            </div>
          <div className="flex flex-col md:w-[33%] w-full">
            <label htmlFor="">Minimum budget</label>
            <Input
              placeholder="Minimum budget"
              type="text"
              classes="large"
            ></Input>
          </div>
        </div>
        <div className=" grid grid-cols-1">
          <div className="flex flex-col md:w-[100%] w-full">
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