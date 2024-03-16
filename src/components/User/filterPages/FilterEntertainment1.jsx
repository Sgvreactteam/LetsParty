
import React from 'react'
import MainCard from '../commanCard/MainCard';
import { Footer } from 'flowbite-react';


const cardData = [
    {
      id: 1,
      photoSrc: "src/assets/Rectangle103.png",
      name: "John Doe",
      
    },
    {
      id: 2,
      photoSrc: "src/assets/Rectangle103.png",
      name: "Jane Smith",
    },
    {
      id: 3,
      photoSrc: "src/assets/Rectangle103.png",
      name: "Jane Smith",
    },
    {
      id: 4,
      photoSrc: "src/assets/Rectangle103.png",
      name: "Jane Smith",
    },
    {
      id: 5,
      photoSrc: "src/assets/Rectangle103.png",
      name: "Jane Smith",
    },
    // Add more data as needed
  ];

function FilterEntertainment1() {
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
  return (
    <>
    <div className="grid grid-cols-4 gap-8 w-[90vw] py-6 mx-auto">
    <div>
      <h3 className="text-secondary text-2xl font-con">Filters</h3>
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
        <div className=" font-pop text-xl pb-4">Entertainment</div>
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
  <Footer/>
  </>
  )
}

export default FilterEntertainment1