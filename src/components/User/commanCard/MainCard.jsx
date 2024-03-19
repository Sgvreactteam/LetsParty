import React from 'react'
import { FaHeart } from 'react-icons/fa'

function MainCard({ photoSrc, name, city }) {
    
  return (
    <div className=" relative">
    <img
      className="w-full h-56 object-cover object-center rounded-md"
      src={photoSrc}
      alt={name}
    />
    <div className=" absolute top-0 right-0 mt-2 mr-3">
    <FaHeart size={25} style={{ color: "#D9D9D9" }} />
    </div>
    <div className="py-3">
      <h3 className="text-lg mb-2 text-light font-pop">
        {name}
      </h3>
      <h3 className="text-[#151515] font-lato">{city}</h3>
     {/* {
      props.currentPage == 0 ? (
        <div className="grid grid-cols-2 mt-2 text-[#8D303A] font-lato">
        <div className="flex gap-3">
          <img className="" src={venue.personImg} alt="" />
          <div className="flex flex-col">
            <span>200</span>
            <span>persons</span>
          </div>
        </div>
        <div className="flex gap-3">
          <img className="" src={venue.groupImg} alt="" />
          <div className="flex flex-col">
            <span>100</span>
            <span>persons</span>
          </div>
        </div>
      </div>
      ):(<></>)
     } */}
    </div>
  </div>
  )
}

export default MainCard