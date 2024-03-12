import React, { useState } from 'react'
import english from './english.jpeg'
import german from './german.png'
import french from './french.png'
import { useTranslation } from "react-i18next";
const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const handleEnglish = () => {
        i18n.changeLanguage("en");
    }
    const handleGerman = () => {
        i18n.changeLanguage("gr");
    }
    const handleFrench = () => {
        i18n.changeLanguage("fr");
    }
  return (
    <div className='flex mt-2 text-white font-light items-center'>
        <img src={english} className='h-[15px] mr-1' />
        <button className='hover:underline' onClick={handleEnglish}>EN |</button>

        <img src={german} className='h-[15px] mr-1' />
        <button className='hover:underline' onClick={handleGerman}>DE |</button>

        <img src={french} className='h-[15px] mr-1' />
        <button className='hover:underline' onClick={handleFrench}>FR |</button>
    </div>
  )
}

export default LanguageSwitch