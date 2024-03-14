import React from 'react'
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.png'
import img4 from './img4.jpeg'
import { BsGlobe } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineChairAlt } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { BiDish } from "react-icons/bi";
import { GiCampCookingPot } from "react-icons/gi";
import Footer from '../Footer/Footer';
import Button from '../../../ui/Button';
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
    <div className='flex flex-col w-[85%] mx-auto mt-8 font-pop'>
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
        <div className="flex flex-col gap-2 mt-8">
          <p className='text-primary text-xl'> {dummyData[0].name} </p>
          <div className="flex flex-row gap-2">
            <div className="flex justify-between mt-4 w-9/12">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <BsGlobe size={20} className='text-secondary' /> {dummyData[0].website}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlinePhoneInTalk size={20} className='text-secondary' /> {dummyData[0].contactNumber}
                </div>
                <div className="flex items-center gap-2">
                  <MdMailOutline size={20} className='text-secondary' /> {dummyData[0].emailAddress}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline size={20} className='text-secondary' /> {dummyData[0].location}
              </div>
            </div>
            <div className='w-3/12 flex flex-col mt-4'>
              <div className="flex flex-row w-full justify-between px-4 py-2 rounded-md bg-[#E1E0F3] items-center">
                <p>Minimum Budget</p>
                <p className='font-extrabold text-primary text-xl'> {dummyData[0].price} </p>
              </div>
              <div className='flex px-2 mt-2 items-center border-b'>
                <MdOutlineChairAlt size={50} className='text-secondary w-1/12' />
                <div className="flex flex-col ml-2">
                  <p className='text-light'>Maximum Capacity</p>
                  <p> {dummyData[0].sittingCapacity} Sitting {dummyData[0].standingCapacity} Standing </p>
                </div>
              </div>
              <div className='flex px-2 mt-2 items-center border-b'>
                <BiCar size={50} className='text-secondary w-1/12' />
                <div className="flex flex-col ml-2">
                  <p className='text-light'> {t('maxPark')} </p>
                  <p> {dummyData[0].parkingSpace}</p>
                </div>
              </div>
              <div className='flex px-2 mt-2 items-center border-b'>
                <BiDish size={50} className='text-secondary w-1/12' />
                <div className="flex flex-col ml-2">
                  <p className='text-light'> {t('catering')} Choice </p>
                  <p> {dummyData[0].cateringChoice}</p>
                </div>
              </div>
              <div className='flex px-2 mt-2 items-center border-b'>
                <GiCampCookingPot size={50} className='text-secondary w-1/12' />
                <div className="flex flex-col ml-2">
                  <p className='text-light'> The kind of cuisine they cook </p>
                  <p> {dummyData[0].cuisine}</p>
                </div>
              </div>
              <div className="mt-20 items-center flex justify-center">
              <Button type="purpleLarge" > Contact </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Details;