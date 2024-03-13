import React from 'react'
import MainCard from '../commanCard/MainCard';


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
function FilterRentalAndService() {
  return (
    <div className="grid grid-cols-4 gap-8">
    <div className=" col-span-3">
        <div className=" font-pop text-xl py-8">Entertainment</div>
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
  )
}

export default FilterRentalAndService