import React, { useState } from "react";
import Input from "../../../../../ui/Input";
import AddImages from "../../../../../ui/AddImages";
import Button from "../../../../../ui/Button";
import { useTranslation } from 'react-i18next';
import "./numberForm.css"
const VenuesForm = () => {
  const { t } = useTranslation();
  const checkBoxArry = [
    {
      Heading: "Indicate whether the following criteria are fulfilled ",
      labels: [
        { id: "1", label: t('profKitchen') },
        { id: "1", label: t('withTerr') },
        { id: "1", label: t('withGar') },
        { id: "1", label: t('soundSysAva') },
        { id: "1", label: t('lightsAva') },
        { id: "1", label: t('microAva') },
        { id: "1", label: t('beamer') },
        { id: "1", label: t('danceFloor') },
        { id: "1", label: t('skittle') },
        { id: "1", label: "Bowling Alley" },
        { id: "1", label: t('handi') },
        { id: "1", label: t('pets') }
      ],
    },
  ];

  return (
    <div className=" ">
        <div className="text-[#8D303A] border-b border-gray pb-4 text-2xl font-con px-10">
            {t('createAnn')}
        </div>
       <div className=" max-w-[1220px] px-10">
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
                <Input placeholder="Url..." type="website" classes="large"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('address')}</label>
                <Input placeholder={t('address')} type="text" classes="textarea"></Input>
            </div>
            <div className='flex flex-col md:w-[50%] w-full'>
                <label htmlFor="">{t('description')}</label>
                <Input placeholder={t('description')} type="text" classes="textarea"></Input>
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
                <select className='p-2 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="">Select</option>
                    <option value="Lunch">{t('lunch')}</option>
                    <option value="Dinner">{t('dinner')}</option>
                </select>
            </div>
            <div className='flex flex-col md:w-[33%] w-full'>
                <label htmlFor="">{t('kindOfCuisine')}</label>
                <select className='p-2 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="">Select</option>
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


          <div className="mt-5 flex flex-col gap-4">
            {checkBoxArry &&
              checkBoxArry.map((item, index) => {
                return (
                  <div className=" " key={index}>
                    <h3 className="text-2xl font-con pb-2">{item.Heading} </h3>
                    <div className="flex flex-wrap gap-3">
                      {item.labels.map((labelData, idx) => (
                        <div
                          className="flex justify-start items-baseline basis-52"
                          key={idx}
                        >
                          <input
                            type="checkbox"
                            id={labelData.id}
                            className=" checkbox-input p-1"
                          />{" "}
                          <label
                            htmlFor={labelData.id}
                            className="font-pop ps-2"
                          >
                            {labelData.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </form>

        <div className="flex justify-between w-full mt-8 mb-8">
          <Button type="grayButton" >Back</Button>
          <Button type="purpleButton"to="/myannouncementss">Next</Button>
        </div>
      </div>
     </div>
  );
};

export default VenuesForm;
