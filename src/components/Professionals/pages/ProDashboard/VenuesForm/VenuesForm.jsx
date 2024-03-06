import React, {useState} from 'react'
import Input from '../../../../../ui/Input'
import AddImages from '../../../../../ui/AddImages';
import Button from '../../../../../ui/Button';
import { useTranslation } from 'react-i18next';

const VenuesForm = () => {
    const { t } = useTranslation();
  return (
    <div className="max-w-[1220px] ">
        <div className="text-[#8D303A] border-b border-gray pb-4 text-2xl font-con">
            {t('createAnn')}
        </div>
        <p className='mt-8 font-con text-[18px]'>{t('venues')}</p> 
        <form className='flex flex-wrap mt-8 font-pop' action="">
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('name')}</label>
                <Input placeholder={t('name')} type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('phoneNum')}</label>
                <Input placeholder={t('phoneNum')} type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('website')}</label>
                <Input placeholder={t('website')} type="website" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('address')}</label>
                <Input placeholder={t('address')} type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('description')}</label>
                <Input placeholder={t('description')} type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('venueSize')}</label>
                <Input placeholder={t('venueSize')} type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('maxCapSit')}</label>
                <Input placeholder={t('maxCapSit')} type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('maxCapStand')}</label>
                <Input placeholder={t('maxCapStand')} type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('maxPark')}</label>
                <Input placeholder={t('maxPark')} type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('cateringChoice')}</label>
                <select className='p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="Lunch">{t('lunch')}</option>
                    <option value="Dinner">{t('dinner')}</option>
                </select>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('kindOfCuisine')}</label>
                <select className='p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="Dinner">Traditional</option>
                    <option value="Lunch">Chinese</option>
                    <option value="Dinner">Italian</option>
                    <option value="Dinner">Mexican</option>
                </select>
            </div>

            <div className="flex flex-col w-[100%]">
                <p>{t('uploadPic')}</p>
                <AddImages />
            </div>
            <div className="flex flex-col mt-4">
                <p>{t('indicateCri')}</p>
                <div className="flex flex-wrap mt-4 gap-2">
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('profKitchen')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('withTerr')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('withGar')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('soundSysAva')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('lightsAva')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('microAva')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('beamer')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('danceFloor')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('skittle')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('handi')}</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>{t('pets')}</p></div>
                    
                </div>
            </div>
            <div className="flex justify-between w-full mt-8 mb-8">
                <Button type="grayButton">{t('back')}</Button>
                <Button type="purpleButton">{t('next')}</Button>
            </div>

        </form>

    </div>
  )
}

export default VenuesForm