import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const UserSectionFooter = () => {

    const { t } = useTranslation()
    const [venues, setVenues] = useState()
    const [ent, setEnt] = useState()
    const [rental, setRental] = useState()
    const [services, setServices] = useState()

    const handleVenues = () => {
        setVenues(!venues);
    }
    const handleEnt = () => {
        setEnt(!ent);
    }
    const handleRental = () => {
        setRental(!rental);
    }
    const handleServices = () => {
        setServices(!services);
    }


  return (
    <div className='flex flex-col gap-2'>
        <p className='font-light flex items-center mt-2' onClick={handleVenues}>{t('venues')}{venues? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   venues && 
                    <div className="flex flex-col p-2 absolute bg-white text-black left-20 top-10 gap-2">
                        <p className=''> {t('castles')} </p>
                        <p className=''> {t('partyRooms')} </p>
                        <p className=''> {t('bars')} </p>
                        <p className=''> {t('hotelsRes')} </p>
                        <p className=''> {t('confMeet')} </p>
                        <p className=''> {t('openAir')} </p>
                        <p className=''> {t('nightClubs')} </p>
                    </div>
                }

                <p className='font-light flex items-center' onClick={handleEnt}>{t('entertainment')}{ent? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   ent && 
                    <div className="flex flex-col p-2 absolute bg-white text-black left-36 top-20 gap-2">
                        <p className=''> {t('dj')} </p>
                        <p className=''> {t('singers')} </p>
                        <p className=''> {t('magicians')} </p>
                        <p className=''> {t('liveMusic')} </p>
                        <p className=''> {t('coverBands')} </p>
                    </div>
                }

                <p className='font-light flex items-center' onClick={handleRental}>{t('rental')}{rental? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   rental && 
                    <div className="flex flex-col p-2 absolute bg-white text-black left-20 top-12 gap-2">
                        <p className=''> {t('audioSound')} </p>
                        <p className=''> {t('lighting')} </p>
                        <p className=''> {t('screens')} </p>
                        <p className=''> {t('tents')} </p>
                        <p className=''> {t('fotoboxes')} </p>
                        <p> {t('bouncy')} </p>
                        <p> {t('furniture')} </p>
                        <p> {t('tableware')} </p>
                        <p> {t('heating')} </p>
                        <p> {t('cars')} </p>
                    </div>
                }

                <p className='font-light flex items-center' onClick={handleServices}>{t('services')}{services? <IoMdArrowDropup size={24} />: <IoMdArrowDropdown size={24} />}</p>
                {   services && 
                    <div className="flex flex-col p-2 absolute bg-white text-black left-24 top-12 gap-2">
                        <p className=''> {t('decorators')} </p>
                        <p className=''> {t('evePlanner')} </p>
                        <p className=''> {t('photographers')} </p>
                        <p className=''> {t('catering')} </p>
                        <p className=''> {t('bakeries')} </p>
                        <p> {t('foodTrucks')} </p>
                        <p> {t('wine')} </p>
                        <p> {t('other')} </p>
                        <p> {t('staff')} </p>
                        <p> {t('security')} </p>
                        <p> {t('buses')} </p>
                    </div>
                }
    </div>
  )
}

export default UserSectionFooter