
import React from 'react'
import MainCard from '../commanCard/MainCard';
import { useTranslation } from 'react-i18next';
import img4 from '../../../assets/img4.png'
import img5 from '../../../assets/img5.png'
import img6 from '../../../assets/img6.png'
import { Link } from 'react-router-dom';

function FilterRentalAndService() {
  const { t } = useTranslation();
  const cardData = [
  
    {
      id: 1,
      photoSrc: img6,
      name: t('confMeet'),
      
    },
    {
      id: 2,
      photoSrc: img4,
      name: t('partyRooms'),
    },
    {
      id: 3,
      photoSrc: img5,
      name: "Bar",
    },
    {
      id: 4,
      photoSrc: img6,
      name: t('confMeet'),
    },
    {
      id: 5,
      photoSrc: img4,
      name: t('partyRooms'),
    },
    {
      id: 3,
      photoSrc: img5,
      name: "Bar",
    },
    {
      id: 4,
      photoSrc: img6,
      name: t('confMeet'),
    },
    {
      id: 5,
      photoSrc: img4,
      name: t('partyRooms'),
    },
    // Add more data as needed
  ];
  return (

    <div className="grid grid-cols-3 gap-8 w-[90vw] mx-auto mt-10">
    <div className=" col-span-3">
        {/* <div className=" font-pop text-xl text-center py-8 text-secondary">Filter rental and services</div> */}
      <div className="grid grid-cols-4 gap-4">

        {cardData.map((data) => (
          <Link to={"/details/" + data.id}>
          <MainCard
            key={data.id}
            photoSrc={data.photoSrc}
            name={data.name}
            city={data.city}
          />
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default FilterRentalAndService