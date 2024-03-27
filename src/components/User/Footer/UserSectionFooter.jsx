import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import VenueOverlay from './VenueOverlay';
import EntOverlay from './EntOverlay';
import { Link } from 'react-router-dom';
const UserSectionFooter = () => {

    const closeDropdown = ( ) => {
        setEnt(false)
        setRental(false)
        setServices(false)
        setVenues(false)
      }
    useEffect(() => {
        const handleClickOutside = (event) => {
          const modalContent = document.querySelector(".this");
    
          if (modalContent && !event.target.closest(".this")) {
            // Close the modal if the click is outside the modal content and not on the excluded class
            closeDropdown();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [closeDropdown]);

      

    const { t } = useTranslation()
    const [venues, setVenues] = useState(false)
    const [ent, setEnt] = useState()
    const [rental, setRental] = useState()
    const [services, setServices] = useState()

    const handleVenues = () => {

        setVenues(!venues);
        setEnt(false)
        setRental(false)
        setServices(false)
    }
    const handleEnt = () => {
        setEnt(!ent);
        setVenues(false)
        setRental(false)
        setServices(false)
    }
    const handleRental = () => {
        setRental(!rental);
        setServices(false)
        setVenues(false)
        setEnt(false)
    }
    const handleServices = () => {
        setServices(!services);
        setVenues(false)
        setEnt(false)
        setRental(false)
    }

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setVenues(false)
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [entModal, setEntModal] = useState(false)

    const openEnt = () => {
        setEnt(false)
        setEntModal(true);
    }
    const closeEnt = () => {
        setEntModal(false);
    }

    
  return (
    <div className='flex flex-col gap-2'>
        <p className='font-light flex items-center mt-2 cursor-pointer' onClick={handleVenues}>{t('venues')}{venues? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   venues && 
                    <div onClick={() => openModal()} className="flex flex-col p-2 absolute w-48 this cursor-pointer bg-white text-black left-20 top-10 gap-2">
                        <p  className=''> {t('castles')} </p>
                        <p className=''> {t('partyRooms')} </p>
                        <p className=''> {t('bars')} </p>
                        <p className=''> {t('hotelsRes')} </p>
                        <p className=''> {t('confMeet')} </p>
                        <p className=''> {t('openAir')} </p>
                        <p className=''> {t('nightClubs')} </p>
                    </div>
                }
                {
                    modalOpen && <VenueOverlay closeModal={closeModal} />
                }

                <p className='font-light flex items-center cursor-pointer' onClick={handleEnt}>{t('entertainment')}{ent? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   ent && 
                    <div onClick={() => openEnt()} className="flex flex-col p-2 absolute this cursor-pointer w-40 bg-white text-black left-36 top-20 gap-2">
                        <p className=''> {t('dj')} </p>
                        <p className=''> {t('singers')} </p>
                        <p className=''> {t('magicians')} </p>
                        <p className=''> {t('liveMusic')} </p>
                        <p className=''> {t('coverBands')} </p>
                    </div>
                }
                {
                    entModal && <EntOverlay closeModal={closeEnt} />
                }

                <p className='font-light flex items-center cursor-pointer' onClick={handleRental}>{t('rental')}{rental? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   rental && 
                    <div className="flex flex-col p-2 absolute bg-white text-black this cursor-pointer left-20 top-8 gap-2 w-48">
                        <Link to="/filter" className=''> {t('audioSound')} </Link>
                        <Link to="/filter" className=''> {t('lighting')} </Link>
                        <Link to="/filter" className=''> {t('screens')} </Link>
                        <Link to="/filter" className=''> {t('tents')} </Link>
                        <Link to="/filter" className=''> {t('fotoboxes')} </Link>
                        <Link to="/filter"> {t('bouncy')} </Link>
                        <Link to="/filter"> {t('furniture')} </Link>
                        <Link to="/filter"> {t('tableware')} </Link>
                        <Link to="/filter"> {t('heating')} </Link>
                        <Link to="/filter"> {t('cars')} </Link>
                    </div>
                }

                <p className='font-light flex items-center' onClick={handleServices}>{t('services')}{services? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   services && 
                    <div  className="flex flex-col p-2 absolute w-60 bg-white text-black this cursor-pointer left-24 top-0 gap-2">
                        <Link to="/filter" className=''> {t('decorators')} </Link>
                        <Link to="/filter" className=''> {t('evePlanner')} </Link>
                        <Link to="/filter" className=''> {t('photographers')} </Link>
                        <Link to="/filter" className=''> {t('catering')} </Link>
                        <Link to="/filter" className=''> {t('bakeries')} </Link>
                        <Link to="/filter"> {t('foodTrucks')} </Link>
                        <Link to="/filter"> {t('wine')} </Link>
                        <Link to="/filter"> {t('other')} </Link>
                        <Link to="/filter"> {t('staff')} </Link>
                        <Link to="/filter"> {t('security')} </Link>
                        <Link to="/filter"> {t('buses')} </Link>
                    </div>
                }
    </div>
  )
}

export default UserSectionFooter