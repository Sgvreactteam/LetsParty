import React from 'react'
import MainCard from '../commanCard/MainCard';
import Footer from '../Footer/Footer';
import img1 from '../../../assets/img1.jpeg'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.png'
import img5 from '../../../assets/img5.png'
import img6 from '../../../assets/img6.png'
import img7 from '../../../assets/img7.png'

const cardData = [
    {
      id: 1,
      photoSrc: img1,
      name: "David Classic Rock",
      
    },
    {
      id: 2,
      photoSrc: img2,
      name: "Classical Music Band",
    },
    {
      id: 3,
      photoSrc: img3,
      name: "Night club",
    },
    {
      id: 4,
      photoSrc: img4,
      name: "Party room",
    },
    {
      id: 5,
      photoSrc: img5,
      name: "Electronic Arrangement",
    },
    {
      id: 6,
      photoSrc: img6,
      name: "Conference & Meeting room",
    },
    {
      id: 7,
      photoSrc: img7,
      name: "Herry Metal",
    },
    // Add more data as needed
  ];

function FilterEntertainment1() {
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
    <>
    <div className="grid grid-cols-4 gap-8 w-[90vw] py-6 mx-auto">
    <div>
      <h3 className="text-secondary text-2xl font-pop">Filters</h3>
      <p className='text-xl font-pop mt-4'>Offers rental of audio and lights</p>
      <div
                      className="flex justify-start items-baseline mt-2"

                    >
                      <input
                        type="checkbox"
                        
                        className=" checkbox-input p-1"
                      />{" "}
                      <label

                        className="font-pop ps-2 font-extralight"
                      >
                        Audio
                      </label>
                    </div>
                    <div
                      className="flex justify-start items-baseline mt-1"

                    >
                      <input
                        type="checkbox"
                        
                        className=" checkbox-input p-1"
                      />{" "}
                      <label

                        className="font-pop ps-2 font-extralight"
                      >
                        Light
                      </label>
                    </div>
                    <p className='text-xl font-pop mt-4'>Music Genre</p>

      <div className="mt-5 flex flex-col gap-4">
        {checkBoxArry &&
          checkBoxArry.map((item, index) => {
            return (
              <div className=" " key={index}>
                <h3 className="font-pop pb-2 text-xl font-light">{item.Heading} </h3>
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
                        className="font-pop ps-2 font-extralight"
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


      <div className="grid grid-cols-4 gap-4 mt-8">

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
  </>
  )
}

export default FilterEntertainment1
