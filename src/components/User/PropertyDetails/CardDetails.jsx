import React from 'react'
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.png'
import img4 from './img4.jpeg'
import FilterVenues from '../filterPages/FilterVenues';
const Details = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const handleBackButton = () => {
    navigate(-1);
    }

    const dummyData = [
      {
        name: "Hotel Grand Safari",
        website: "absd.co.in",
        contactNumber: "+352 76 01 06",
        emailAddress: "demomail@gmail.com",
        location: "Sitapura, Jaipur",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eius tempore laboriosam perspiciatis ex officiis voluptate deserunt possimus, dignissimos reiciendis mollitia vitae libero vel, voluptatem harum maiores veniam ducimus odio impedit laudantium esse eum voluptas voluptatum. Deserunt officiis suscipit quaerat. Hic nam veritatis consequatur consectetur voluptates ut velit, eaque, corporis qui officiis deserunt tempora fugit deleniti in perspiciatis saepe laudantium sapiente ipsam culpa, vero eius. Beatae, asperiores illum sunt dolore, nulla eaque commodi recusandae, enim animi provident dolores unde necessitatibus ratione ducimus quo molestiae laborum nemo. Nemo impedit earum suscipit eligendi. Illum corrupti quae nisi blanditiis doloribus eos asperiores consequatur!",
        price: "$400",
        criteria: {
          profKitchen: true,
          withTerrasse: false,
          withGarden: true,
          soundSys: true,
          microphone: true,
          lights: false,
          screens: false,
          dancefloor: false,
          skittle: false,
          bowling: false,
          handi: false,
          pets: false
        },
        acceptedEvents: {
          birthday: true,
          wedding: false,
          anniversary: true,
          gathering: true,
          concert: false,
          prodLaunch: true,
          reception: false,
          afterwork: false,
          conference: false,
          meeting: false,
          ceremony: false,
          party: true,
          socialEvent: false,
          assembly: false
        },
        parkingSpace: "50-75",
        cateringChoice: "Limited",
        cuisine: "French, Indian, Vegetarian and Vegan Cuisine",
        sittingCapacity: "100",
        standingCapacity: "250",
        images: [
          {img: img1}, {img: img2}, {img: img3}, {img: img4}
        ]
      }
    ]
  return (
    <div className='flex flex-col w-[85%] mx-auto mt-8'>
        <p onClick={handleBackButton} className='flex items-center gap-2 text-secondary cursor-pointer'> <IoCaretBackCircleSharp size={20} /> {t('details')} </p>
        <div className="flex flex-col flex-wrap w-full mt-4 h-[400px] gap-2">
          <img className='w-1/2 h-full object-cover' src={dummyData[0].images[0].img} alt="" />
          <div className="flex w-1/2 flex-wrap">
          {
            dummyData[0].images.map((image, index) => (
              <img className='w-5/12 h-1/2 mx-2 ' key={index} src={image.img} alt="" />
            ))
          }
          </div>
        </div>
          <FilterVenues />
    </div>
  )
}

export default Details;