
import React from 'react'
import MainCard from '../commanCard/MainCard';
import { useTranslation } from 'react-i18next';
import photo from '../../../assets/Rectangle103.png'

function FilterRentalAndService() {
  const { t } = useTranslation();
  const cardData = [
  
    {
      id: 1,
      photoSrc: photo,
      name: t('confMeet'),
      
    },
    {
      id: 2,
      photoSrc: photo,
      name: t('partyRooms'),
    },
    {
      id: 3,
      photoSrc: photo,
      name: "Bar",
    },
    {
      id: 4,
      photoSrc: photo,
      name: t('confMeet'),
    },
    {
      id: 5,
      photoSrc: photo,
      name: t('partyRooms'),
    },
    // Add more data as needed
  ];
  return (
    <div className="grid grid-cols-3 gap-8 w-[90vw] mx-auto">
    <div className=" col-span-3">
        <div className=" font-pop text-xl text-center py-8 text-secondary">Filter rental and services</div>
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