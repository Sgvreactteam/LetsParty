import { useEffect, useState } from 'react';
import React from 'react'
import './photoOverlay.css'
import ReCAPTCHA from 'react-google-recaptcha';
import { IoCloseSharp } from "react-icons/io5";
import { t } from 'i18next';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
const FormOverlay = ({closeFormModalX}) => {
  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = (token) => {
    // Called when the user has successfully completed the reCAPTCHA challenge and a token has been generated
    console.log('Captcha Token:', token);
    setCaptchaToken(token);
  };
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeFormModalX();
        }
      };
        const handleClickOutside = (event) => {
            const modalContent = document.querySelector('.modal-content');

            if (
              modalContent &&
              !event.target.closest('.modal-content') &&
              !event.target.closest('.button') 
            ) {
              // Close the modal if the click is outside the modal content and not on the excluded class
              closeFormModalX();
            }

            
          
          
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleKeyDown);
        };

        
    
        
      }, [closeFormModalX]);

      
    
  return (
    <div className="modal-overlay overflow-y-auto">
      <div className="modal-content bg-white flex flex-col gap-2 p-8 rounded-3xl w-[50vw] overflow-y-auto top-0">
        <div className="flex w-full justify-center">
        <p className='text-secondary text-2xl'> {t('contactwith')} </p>
        <IoCloseSharp onClick={closeFormModalX} size={24} className='absolute top-0 mt-2 mr-2 right-0' color='white' />
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
        <label htmlFor=""> {t('address')} </label>
        <Input placeholder={t('address')} classes="textarea"></Input>

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
        <p className='text-xl underline-offset-4 underline'>{t('eveInfo')}</p>
        <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
                <label htmlFor=""> {t('eveDate')} </label>
                <Input placeholder={t('eveDate')} type="date" classes="large"></Input>
                </div>
                <div className="flex flex-col w-1/2">
                <label htmlFor="">{t('participants')}</label>
                <Input type="number" placeholder={t('participants')} classes="large" ></Input>
            </div>
        </div>
        <label htmlFor=""> {t('message')} </label>
        <Input placeholder={t('message')} classes="textarea"></Input>

        <div className="flex justify-between items-center">
            <ReCAPTCHA
            sitekey="" // Replace with your reCAPTCHA Site Key
            onChange={handleCaptchaChange} // Callback function when token is generated
            />
            {/* <button className='' onClick={() => console.log('Token:', captchaToken)}>Check Token</button> */} 


            <Button type="purpleButton"> {t('submit')} </Button>
        </div>

      </div>
    </div>
  )
}

export default FormOverlay