
import React, { useState } from "react";
import MainCard from "../commanCard/MainCard";
import img1 from '../../../assets/Rectangle103.png'
import Footer from "../Footer/Footer";
import Map from "./Map";
import { t } from 'i18next';
import './map.css'

const cardData = [
  {
    id: 1,
    photoSrc: img1,
    name: "John Doe",
    city: "City, Country",
  },
  {
    id: 2,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
  },
  {
    id: 3,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
  },
  {
    id: 4,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
  },
  {
    id: 5,
    photoSrc: img1,
    name: "Jane Smith",
    city: "Another City, Country",
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
        { id: "1", label: "Castles" },
        { id: "1", label: "Castles" },
        { id: "1", label: "as resquested by " },
        { id: "1", label: "Castles" },
        { id: "1", label: " resquested by host" },
        { id: "1", label: "Castles" },
        { id: "1", label: "Castles" },
        { id: "1", label: "as " },
        { id: "1", label: "Castles" },
      ],
    },
  ];
  const checkBoxArry2 = [
    {
      Heading: "Features of the venue ",
      labels: [
        { id: "1", label: "Castles" },
        { id: "1", label: "Castles" },
        { id: "1", label: "as resquested by " },
        { id: "1", label: "Castles" },
        { id: "1", label: " resquested by host" },
        { id: "1", label: "Castles" },
        { id: "1", label: "Castles" },
        { id: "1", label: "as " },
        { id: "1", label: "Castles" },
      ],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-8 w-[90vw] mx-auto py-6">
        <div>
          <h3 className="text-secondary text-2xl font-con">Filters</h3>
          <Map />
          <label className=" flex flex-col w-full mt-4">
            {t('capacity')}
            <input
              type="range"
              value={capacity}
              max={100}
              onChange={handleCapacityChange}
              className="slider"
            />
          </label>
          <div className="mt-5 flex flex-col gap-4">
            {checkBoxArry &&
              checkBoxArry.map((item, index) => {
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
                          />
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
          <div className="flex flex-col gap-5">

            <label className="items-center flex">
              Size
              <input
                type="range"
                value={size}
                max={100}
                onChange={handleSizeChange}
              />
              {size}
            </label>

            <label className="items-center flex">
              Distance
              <input
                type="range"
                value={distance}
                max={100}
                onChange={handleDistanceChange}
              />
              {distance}
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
        </div>

          <div className=" col-span-3">
          <div className=" font-pop text-xl pb-4">Venues</div>
            <div className="grid grid-cols-3 gap-4">
              {cardData.map((data) => (
              <MainCard
                key={data.id}
                photoSrc={data.photoSrc}
                name={data.name}
                city={data.city}
              />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default FilterVenues;
