
import React from 'react'
import { FaHeart } from 'react-icons/fa'

function MainCard({ photoSrc, name, city }) {
    const handleFavClick = (event) => {
      event.preventDefault();
    }
  return (
    <div className=" relative">
    <img
      className="w-full h-56 object-cover object-center rounded-md"
      src={photoSrc}
      alt={name}
    />
    <div className=" absolute top-0 right-0 mt-2 mr-3">
    <FaHeart onClick={handleFavClick} size={25} style={{ color: "#D9D9D9" }} />
    </div>
    <div className="py-3">
      <h3 className="text-lg font-semibold mb-2 text-light font-pop">
        {name}
      </h3>
      <h3 className="text-[#151515] font-lato">{city}</h3>
     
    </div>
  </div>
  )
}

export default MainCard