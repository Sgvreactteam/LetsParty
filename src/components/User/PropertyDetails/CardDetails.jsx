import React, {useState, useEffect} from 'react'
import { IoCaretBackCircleSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.png'
import img4 from './assets/img4.jpeg'
import img5 from './assets/auth-background.jpeg'
import { BsGlobe } from "react-icons/bs";
import { MdOutlineKitchen, MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineChairAlt } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import { BiDish } from "react-icons/bi";
import { GiCampCookingPot } from "react-icons/gi";

import kitchen from './assets/kitchen.svg'
import speaker from './assets/sound.svg'
import skittle from './assets/skittle.svg'
import lighting from './assets/lighting.svg'
import beamer from './assets/beamer.svg'
import microphone from './assets/microphone.svg'
import bowling from './assets/bowling.svg'
import handi from './assets/handi.svg'
import pets from './assets/pets.svg'

import terrasse from './assets/icon.svg'
import garden from './assets/garden.svg'
import dance from './assets/dance.svg'

import Footer from '../Footer/Footer';
import Button from '../../../ui/Button';
import PhotoOverlay from './PhotoOverlay';
import FormOverlay from './FormOverlay';
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
        emailAddress: "mailto:demomail@gmail.com",
        location: "Sitapura, Jaipur",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eius tempore laboriosam perspiciatis ex officiis voluptate deserunt possimus, dignissimos reiciendis mollitia vitae libero vel, voluptatem harum maiores veniam ducimus odio impedit laudantium esse eum voluptas voluptatum. Deserunt officiis suscipit quaerat. Hic nam veritatis consequatur consectetur voluptates ut velit, eaque, corporis qui officiis deserunt tempora fugit deleniti in perspiciatis saepe laudantium sapiente ipsam culpa, vero eius. Beatae, asperiores illum sunt dolore, nulla eaque commodi recusandae, enim animi provident dolores unde necessitatibus ratione ducimus quo molestiae laborum nemo. Nemo impedit earum suscipit eligendi. Illum corrupti quae nisi blanditiis doloribus eos asperiores consequatur!",
        price: "$400",
        criteria: [
          {
            name: "Professional Kitchen",
            icon: kitchen,
            status: true
          },
          {
            name: "With Terrasse",
            icon: terrasse,
            status: false
          },
          {
            name: "With Garden",
            icon: garden,
            status: true
          },
          {
            name: "With Sound System",
            icon: speaker,
            status: true
          },
          {
            name: "Microphone available",
            icon: microphone,
            status: true
          },
          {
            name: "Lights Available",
            icon: lighting,
            status: false
          },
          {
            name: "Beamer + Screens Available",
            icon: beamer,
            status: false
          },
          {
            name: "Dancefloor",
            icon: dance,
            status: false
          },
          {
            name: "Skittle Alley",
            icon: skittle,
            status: false
          },
          {
            name: "Bowling Alley",
            icon: bowling,
            status: false
          },
          {
            name: "Handicapped Accessible",
            icon: handi,
            status: false
          },
          {
            name: "Pets Accepted",
            icon: pets,
            status: false
          }
        ],
        acceptedEvents: [
          {
            name: "Birthday",
            status: true,
          },
          {
            name: "Wedding",
            status: false,
          },
          {
            name: "Anniversary",
            status: true,
          },
          {
            name: "Family Gathering",
            status: true,
          },
          {
            name: "Concert",
            status: false
          },
          {
            name: "Product Launch",
            status: true
          },
          {
            name: "Reception",
            status: false
          },
          {
            name: "Afterwork",
            status: false
          },
          {
            name: "Conference",
            status: false
          },
          {
            name: "Buisness Meeting",
            status: false
          },
          {
            name: "Gala/Ceremony",
            status: false
          },
          {
            name: "Public Party",
            status: true
          },
          {
            name: "Social Event",
            status: false
          },
          {
            name: "General Assembly",
            status: false
          }
        ],
        parkingSpace: "50-75",
        cateringChoice: "Limited",
        cuisine: "French, Indian, Vegetarian and Vegan Cuisine",
        sittingCapacity: "100",
        standingCapacity: "250",
        images: [
          {img: img1}, {img: img2}, {img: img3}, {img: img4}, {img: img5}
        ]
      }
    ]


    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formModal, setFormModal] = useState(false)

    const openModal = (index) => {
      setCurrentIndex(index)
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const goToPrevPhoto = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? dummyData[0].images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextPhoto = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dummyData[0].images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const openFormModal = () => {
      setFormModal(true);
    }
    const closeFormModal = ( ) => {
      setFormModal(false);
    }

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  return (
    <>
    
    <div className='flex flex-col w-[85%] mx-auto mt-8 font-pop z-9'>
        <p onClick={handleBackButton} className='flex items-center gap-2 text-secondary cursor-pointer'> <IoCaretBackCircleSharp size={20} /> {t('details')} </p>
        <div className="flex flex-col flex-wrap w-full mt-4 h-[400px] gap-2">
          <img onClick={() => openModal(0)} className='w-1/2 h-full object-cover' src={dummyData[0].images[0].img} alt="" />
          <div className="flex w-1/2 h-full flex-wrap">
            <img onClick={() => openModal(1)} className='w-1/2 h-1/2 pb-1 pr-1 object-cover rounded-md' src={dummyData[0].images[1].img} alt="" />
            <img onClick={() => openModal(2)} className='w-1/2 h-1/2 object-cover pb-1 pl-1 rounded-md' src={dummyData[0].images[2].img} alt="" />
            <img onClick={() => openModal(3)} className='w-1/2 h-1/2 object-cover pt-1 pr-1 rounded-md' src={dummyData[0].images[3].img} alt="" />
            <div onClick={() => openModal(4)} className='w-1/2 h-1/2 pl-1 pt-1 relative rounded-md cursor-pointer'><img className=' object-cover h-full rounded-md' src={dummyData[0].images[4].img} alt="" />
              <p onClick={() => openModal(0)} className='absolute bg-gray w-[99%] h-[98%] mb-2  rounded-md top-1 opacity-80  flex justify-center items-center text-white'>+{dummyData[0].images.length-4}</p>
              
            </div>
            
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-8">
          <p className='text-primary text-xl'> {dummyData[0].name} </p>
          <div className="flex md:flex-row flex-col gap-2">
            <div className="flex flex-col gap-6 mt-4 md:w-9/12 w-full">
              <div className="flex justify-between flex-wrap">
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
                <div className="flex items-center gap-2 mr-8 md:mt-0 mt-4">
                  <IoLocationOutline size={20} className='text-secondary' /> {dummyData[0].location}
                </div>
              </div>
              <p className='text-light font-light font-lato'>{dummyData[0].description} <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor culpa, maxime quia itaque eveniet magni assumenda neque animi placeat esse voluptatibus fugit blanditiis beatae consequuntur sequi. Earum ipsum sequi exercitationem, possimus eligendi accusamus, adipisci aperiam, iste eaque tenetur dolorem maiores consequuntur! Quod quaerat culpa quas similique, accusantium ab vitae. Consectetur, saepe libero voluptate facere pariatur accusamus rerum asperiores nesciunt ab distinctio alias, beatae culpa aliquid hic possimus cupiditate sapiente. Quia quos debitis accusantium consequatur consectetur nisi earum soluta autem eaque illum rem voluptate, quibusdam maxime placeat ea asperiores sint officiis ab enim. Sapiente, blanditiis sed? Sed tenetur, et libero sit aliquid numquam, earum eius voluptates dignissimos dolore ratione. Illo nostrum odio expedita sapiente magni voluptatum porro ducimus sit vel ad ullam obcaecati cumque quod ratione soluta excepturi mollitia temporibus minima.</p>
              <div className="flex flex-col flex-wrap">
                <p className='text-lg mb-4'>Criteria</p> 
                <div className="flex gap-4 flex-wrap text-sm">
                  {dummyData[0].criteria.map((item) => (
                    <div className={`flex items-center gap-2 ${ item.status === true ? "text-[#1A32B5]" : "text-[#BBBBBB]" }`}> <img src={item.icon} alt="" /> {item.name} </div>
                  ))}
                </div>
              
              </div>

              <div className="flex flex-col flex-wrap mb-12">
                <p className='text-lg mb-4'>Accepted Events</p> 
                <div className="flex gap-4 flex-wrap text-sm">
                  {dummyData[0].acceptedEvents.map((item) => (
                    <div className={`${ item.status === true ? "text-[#1A32B5]" : "text-[#BBBBBB]" }`}>{item.name} </div>
                  ))}
                </div>
              
              </div>

            </div>
            <div className='md:w-3/12 w-full flex flex-col gap-2 mt-4'>
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
              <div className="mt-20 items-center flex justify-center md:mb-0 mb-12">
              <Button onClick={() => {openFormModal()}} type="purpleLarge" > Contact </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
    {
            modalOpen && (
                <PhotoOverlay
                  closeModal={closeModal}
                  currentPhoto={dummyData[0].images[currentIndex]}
                  onPrev={goToPrevPhoto}
                  onNext={goToNextPhoto}
                />
              )
    }
    {
            formModal && (
                <FormOverlay
                  closeFormModal={closeFormModal}
                />
              )
    }
    </>
  )
}

export default Details;