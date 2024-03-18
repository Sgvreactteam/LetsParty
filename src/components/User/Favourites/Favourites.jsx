import React from 'react'
import MainCard from '../commanCard/MainCard'
import img1 from "../../../assets/Rectangle103.png"
import person from '../../../assets/Vector.png'
import group from '../../../assets/Group.png'
const cardData = [
    {
      id: 1,
      photoSrc: img1,
      name: "John Doe",
      city: "City, Country",
    },
    
    // Add more data as needed
  ];

function Favourites() {
  return (
     <div className='mt-8'>
      <div className='text-center text-secondary text-2xl font-con'>Favourites</div>
      <div className=" col-span-3 w-[90vw] mx-auto">
          <div className=" font-pop text-xl pb-4">Venues</div>
            <div className="grid grid-cols-3 gap-4">
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
                <img className="w-8 h-8" src={person} alt="" />
                <div className="flex flex-col text-sm">
                  <span>200</span>
                  <span>persons</span>
                </div>
              </div>
              <div className="flex gap-3">
                <img className="w-8 h-8" src={group} alt="" />
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
  )
}

export default Favourites