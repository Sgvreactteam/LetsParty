import { useEffect, useState } from 'react';
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { IoCloseSharp } from "react-icons/io5";
import { t } from 'i18next';
import Input from '../../../ui/Input';
import './overlay.css'
import Button from '../../../ui/Button';
const ContactOverlay = ({closeContactOverlay}) => {
  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = (token) => {
    // Called when the user has successfully completed the reCAPTCHA challenge and a token has been generated
    console.log('Captcha Token:', token);
    setCaptchaToken(token);
  };
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeContactOverlay();
        }
      };
        const handleClickOutside = (event) => {
            const modalContent = document.querySelector('.modal-contentC');

            if (
              modalContent &&
              !event.target.closest('.modal-contentC') &&
              !event.target.closest('.button') 
            ) {
              // Close the modal if the click is outside the modal content and not on the excluded class
              closeContactOverlay();
            }

            
          
          
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown)
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleKeyDown);
        };

        
    
        
      }, [closeContactOverlay]);

      
    
  return (
    <div className="modal-overlay overflow-y-auto">
      <div className="modal-contentC bg-white flex flex-col gap-2 p-8 rounded-3xl w-[50vw] overflow-y-auto top-0 text-black">
        <div className="flex w-full justify-center">
        <p className='text-secondary text-2xl'> {t('contactUs')} </p>
        <IoCloseSharp onClick={closeContactOverlay} size={24} className='absolute top-0 mt-2 mr-2 right-0' color='white' />
        </div>
        <p className='text-xl underline-offset-4 underline'>{t('personalInfo')}</p>
        <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
                <label htmlFor="">{t('firstName')}</label>
                <Input type="text" placeholder="First Name" classes="large" ></Input>
            </div>
            <div className="flex flex-col w-1/2">
            <label htmlFor="">{t('lastName')}</label>
            <Input type="text" placeholder="Last Name" classes="large" ></Input>
            </div>
        </div>


        <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
            <label htmlFor=""> {t('phoneNum')} </label>
        <Input placeholder={t('phoneNum')} type="number" classes="large"></Input>
            </div>
            <div className="flex flex-col w-1/2">
            <label htmlFor="">{t('email')}</label>
            <Input type="mail" placeholder={t('email')} classes="large" ></Input>
            </div>
        </div>


        <label htmlFor=""> {t('message')} </label>
        <Input placeholder={t('message')} classes="textarea"></Input>

        <div className="flex justify-between items-center">
        <ReCAPTCHA
        sitekey="6LcRUacpAAAAAPS2efSYzcjEoNlYXV9bh2S8xHu1" // Replace with your reCAPTCHA Site Key
        onChange={handleCaptchaChange} // Callback function when token is generated
      />
            <Button type="purpleButton"> {t('submit')} </Button>
        </div>

      </div>
    </div>
  )
}

export default ContactOverlay