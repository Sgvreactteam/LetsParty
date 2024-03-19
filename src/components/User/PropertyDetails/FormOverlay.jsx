import { useEffect } from 'react';
import React from 'react'
import './photoOverlay.css'
import { IoCloseSharp } from "react-icons/io5";
import { t } from 'i18next';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
const FormOverlay = ({closeFormModal}) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            const modalContent = document.querySelector('.modal-content');

            if (
              modalContent &&
              !event.target.closest('.modal-content') &&
              !event.target.closest('.button') 
            ) {
              // Close the modal if the click is outside the modal content and not on the excluded class
              closeFormModal();
            }

            
          
          
        };
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };

        
    
        
      }, [closeFormModal]);

      
    
  return (
    <div className="modal-overlay">
      <div className="modal-content bg-white flex flex-col gap-2 p-8 rounded-3xl w-[50vw]">
        <div className="flex w-full justify-center">
        <p className='text-secondary text-2xl'> {t('contactwith')} </p>
        <IoCloseSharp onClick={closeFormModal} size={24} className='absolute top-0 mt-2 mr-2 right-0' color='white' />
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
            <p>I'm not a robot</p>
            <Button type="purpleButton"> {t('submit')} </Button>
        </div>

      </div>
    </div>
  )
}

export default FormOverlay