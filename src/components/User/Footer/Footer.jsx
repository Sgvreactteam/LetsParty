import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import UserSectionFooter from './UserSectionFooter';
import LanguageSwitch from './LanguageSwitch';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import whiteLogo from './logoWhite.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
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
    <div className="bg-[#141626] w-full text-white font-pop pt-12 flex flex-col">
        <div className="flex flex-row w-[80%] mx-auto justify-between">
            <div className='flex flex-col relative gap-2'>
                <p className='text-xl font-light'> {t('forUser')}  </p>
                <UserSectionFooter/>   
                <LanguageSwitch/>           
            </div>
            <div className="flex flex-col gap-2 w-1/3 font-light">
                <p className="text-xl font-light">
                    {t('forPro')}
                </p>
                <Link to='/ProfessionalRegister'> {t('createAccLogin')} </Link>
                <Link to=""> {t('changeAnn')} </Link>
                <div className='px-4 w-40 py-2 mt-2 rounded-sm bg-secondary font-light'><a href="" className="flex  items-center gap-2"> <FaPhoneAlt size={20} /> {t('contactMe')} </a></div>
                <img src={whiteLogo} className='w-40 bg-black mt-2' alt="" />
            </div>
            <div className="flex flex-col gap-2 w-1/3 font-light">
                <p className="text-xl font-light">
                    {t('joinUsOn')}
                </p>
                <p> {t('contactUs')} </p>
                <Link to="/terms&condition"> {t('termsCon')} </Link>
                <p> {t('pripol')} </p>
                <div className="flex gap-2 mt-2">
                    <FaSquareFacebook size={24} />
                    <FaInstagram size={24} />
                    <FaLinkedinIn  size={24} />
                    
                </div>
                <p>Lorem Ipsum has been the industry's standard took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <div className="flex items-center justify-center border-t border-[#352C80] py-4 mt-16"> {t('copyrights')} </div>
    </div>
  )
}

export default Footer