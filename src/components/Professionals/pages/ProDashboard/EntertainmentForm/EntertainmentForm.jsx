import React, { useState } from "react";
import Input from "../../../../../ui/Input";
import AddImages from "../../../../../ui/AddImages";
import Button from "../../../../../ui/Button";
import AddVideo from "../../../../../ui/AddVedio";
import { t } from "i18next";
import AddressAutoComplete from "../AddressAutoComplete";
function EntertainmentForm() {
  const checkBoxArry = [
    {
      Heading: "Flexible ",
      labels: [{ id: "1", label: "as resquested by host" }],
    },
    {
      Heading: "Classical Music ",
      labels: [
        { id: "1", label: "Baroque" },
        { id: "2", label: "Classical " },
        { id: "3", label: "Romantic  " },
        { id: "4", label: "Contemporary  " },
      ],
    },
    {
      Heading: "Jazz ",
      labels: [
        { id: "1", label: "Swing" },
        { id: "1", label: "Bebop " },
        { id: "1", label: "Fusion " },
      ],
    },
    {
      Heading: "Rock ",
      labels: [
        { id: "1", label: "Classical Rock" },
        { id: "1", label: "Punk " },
        { id: "1", label: "Alternative " },
        { id: "1", label: "Indie Rock " },
      ],
    },
    {
      Heading: "Metal ",
      labels: [
        { id: "1", label: "Heavy Metal" },
        { id: "1", label: "Black Metal " },
        { id: "1", label: "Death Metal " },
      ],
    },
    {
      Heading: "Pop ",
      labels: [
        { id: "1", label: "Pop-Rock" },
        { id: "1", label: "Electro Pop " },
        { id: "1", label: "Dance Pop " },
        { id: "1", label: "Indie Pop " },
      ],
    },
    {
      Heading: "Hip-Hop/Rap ",
      labels: [
        { id: "1", label: "Hip-Hop/Rap" },
        
      ],
    },
    {
      Heading: "Electronic ",
      labels: [
        { id: "1", label: "Techno" },
        { id: "1", label: "House " },
        { id: "1", label: "Trance " },
        { id: "1", label: "Dubstep " },
      ],
    },
    {
      Heading: "Blues ",
      labels: [
        { id: "1", label: "Blues" },
        
      ],
    },
    {
      Heading: "R&B ",
      labels: [
        { id: "1", label: "Raggea" },
        { id: "2", label: "Latin" },
        
      ],
    },
    {
      Heading: "Folk ",
      labels: [
        { id: "1", label: "Flok" },
        
      ],
    },
    {
      Heading: "Indie ",
      labels: [
        { id: "1", label: "Indie" },
        
      ],
    },
  ];
  return (
    <div className=" ">
      <div className="text-[#8D303A] text-2xl font-con border-b-[1px] border-borde py-5 px-10">
        Create Announcement
      </div>
      <div className=" max-w-[1220px] px-10">
        <p className="mt-8 font-con text-[18px]">Entertainment </p>
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
            <AddressAutoComplete />
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
                type="number"
                classes="large"
              ></Input>
            </div>
          </div>
          <div className=" grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col md:w-[100%] w-full">
              <p>Upload of pictures (max 15)</p>
              <AddImages />
            </div>
            <div>
              <div className="flex flex-col md:w-[100%] w-full">
                <p>Upload of samples (mp3/video) (max 10)</p>
                <AddVideo />
              </div>
            </div>
          </div>
       
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="font-con text-2xl">
              Offers rental of audio and lights
            </h3>
            <div className="flex flex-wrap  gap-32">
              <div className="flex my-2">
                <input type="checkbox" name="" id="" />{" "}
                <p className="ml-2">Audio</p>
              </div>
              <div className="flex my-2">
                <input type="checkbox" name="" id="" />{" "}
                <p className="ml-2">Lights</p>
              </div>
            </div>
          </div>
          <h2 className=" text-2xl font-con">Music Genre</h2>
          {checkBoxArry &&
            checkBoxArry.map((item, index) => {
              return (
                <div className=" mt-2" key={index}>
                  <h3 className="text-xl font-con pb-2">{item.Heading} </h3>
                  <div className="flex flex-wrap gap-2">
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
                        <label htmlFor={labelData.id} className="font-pop ps-2">
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
          <Button type="grayButton">Back</Button>
          <Button type="purpleButton" to="/myannouncementss">Next</Button>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentForm;
