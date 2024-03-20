import React, { useState } from "react";
import MainCard from "../commanCard/MainCard";
import img1 from '../../../assets/Rectangle103.png'
import Footer from "../Footer/Footer";
import Map from "./Map";
import { t } from 'i18next';

import person from '../../../assets/Vector.png'
import group from '../../../assets/Group.png'



const cardData = [
  {
    id: 1,
    photoSrc: img1,
    name: "John Doe",
    city: "City, Country",
    personImg: person,
    groupImg: group,
  },
  {
    id: 2,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
    personImg: person,
    groupImg: group,
  },
  {
    id: 3,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
    personImg: person,
    groupImg: group,
  },
  {
    id: 4,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
    personImg: person,
    groupImg: group,
  },
  {
    id: 5,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
    personImg: person,
    groupImg: group,
  },
  // Add more data as needed
];

function FilterVenues() {
  const [capacity, setCapacity] = useState(50);
  const [size, setSize] = useState(75);
  const [distance, setDistance] = useState(25);

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const checkBoxArry = [
    {
      Heading: "Kind of venue ",
      labels: [
        { id: "1", label: t('castles') },
        { id: "1", label: t('partyRooms') },
        { id: "1", label: t('bars') },
        { id: "1", label: t('hotelsRes') },
        { id: "1", label: t('confMeet') },
        { id: "1", label: t('openAir') },
        { id: "1", label: t('nightClubs') },
      ],
    },
  ];
  const checkBoxArry2 = [
    {
      Heading: "Features of the venue ",
      labels: [
        { id: "1", label: t('profKitchen') },
        { id: "1", label: t('partywithTerrRooms') },
        { id: "1", label: t('withGar') },
        { id: "1", label: t('soundSysAva') },
        { id: "1", label: t('lightsAva') },
        { id: "1", label: t('microAva') },
        { id: "1", label: t('beamer') },
        { id: "1", label: t('danceFloor') },
        { id: "1", label: t('skittle') },
        { id: "1", label: t('Bowling Alley') },
        { id: "1", label: t('handi') },
        { id: "1", label: t('pets') },
      ],
    },
  ];


  return (
    <>
      <div className="grid grid-cols-4 gap-8 w-[90vw] mx-auto py-6">
        <div>
          <h3 className="text-secondary text-2xl font-con">Filters</h3>
          <Map />
          <label className=" flex flex-col w-full mt-4 text-2xl text-pop">
            {t('distance')}
            <input
              type="range"
              value={distance}
              max={100}
              onChange={handleDistanceChange}
              className={distance>0?"pruple":"pp"}
            />
            <div className="slider-value text-sm ">{distance} Km</div>

            
          </label>
          <div className="mt-5 flex flex-col gap-4">
            {checkBoxArry &&
              checkBoxArry.map((item, index) => {
                return (
                  <div className=" " key={index}>
                    <h3 className="text-2xl font-pop font-light pb-2">{item.Heading} </h3>
                    <div className=" flex flex-col gap-3">
                      {item.labels.map((labelData, idx) => (
                        <div
                          className="flex justify-start items-baseline "
                          key={idx}
                        >
                          <input
                            type="checkbox"
                            id={labelData.id}
                            className=" checkbox-input p-1"
                          />
                          <label
                            htmlFor={labelData.id}
                            className="font-pop ps-2 font-light"
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
          <div className="flex flex-col gap-5">

          <label className=" flex flex-col w-full mt-4 text-2xl text-pop">
            {t('size')}
            <input
              type="range"
              value={size}
              max={1000}
              onChange={handleSizeChange}
              className={capacity>0?"pruple":"pp"}
            />
            <div className="slider-value text-sm ">{size} Square feet</div>

            
          </label>

          <label className=" flex flex-col w-full mt-4 text-2xl text-pop">
            {t('capacity')}
            <input
              type="range"
              value={capacity}
              max={1000}
              onChange={handleCapacityChange}
              className={capacity>0?"pruple":"pp"}
            />
            <div className="slider-value text-sm ">{capacity} People</div>

            
          </label>
          </div>
          <div className="mt-5 flex flex-col gap-4">
            {checkBoxArry2 &&
              checkBoxArry2.map((item, index) => {
                return (
                  <div className=" " key={index}>
                    <h3 className="text-2xl font-con pb-2">{item.Heading} </h3>
                    <div className=" flex flex-col gap-3">
                      {item.labels.map((labelData, idx) => (
                        <div
                          className="flex justify-start items-baseline "
                          key={idx}
                        >
                          <input
                            type="checkbox"
                            id={labelData.id}
                            className=" checkbox-input p-1"
                          />{" "}
                          <label
                            htmlFor={labelData.id}
                            className="font-pop ps-2 font-light"
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
        </div>

          <div className=" col-span-3">
          <div className=" font-pop text-xl pb-4">Venues</div>
            <div className="grid grid-cols-4 gap-4">

              {cardData.map((data) => (
                <div>
              <MainCard
                key={data.id}
                photoSrc={data.photoSrc}
                name={data.name}
                city={data.city}
              /> 
               <div className="grid grid-cols-2 mt-2 text-[#8D303A] font-lato">
              <div className="flex gap-3">
                <img className="w-8 h-8" src={data.personImg} alt="" />
                <div className="flex flex-col text-sm">
                  <span>200</span>
                  <span>persons</span>
                </div>
              </div>
              <div className="flex gap-3">
                <img className="w-8 h-8" src={data.groupImg} alt="" />
                <div className="flex flex-col text-sm">
                  <span>100</span>
                  <span>persons</span>
                </div>
              </div>
            </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterVenues;
