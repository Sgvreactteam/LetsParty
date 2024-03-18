import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";
import { useTranslation } from 'react-i18next';

function Prodashboard() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const { t } = useTranslation();


  const categories = [
    { value: "", label: "Select..." },
    { value: "Venues", label: `${t('venues')}` },
    { value: "Entertainment", label: `${t('entertainment')}` },
    { value: "Rental", label: `${t('rental')}` },
    { value: "Services", label: `${t('services')}` },
  ];

  const subcategoriesMap = {
    Venues: [
      { value: "", label: "Select..." },
      { value: "Castles", label: `${t('castles')}` },
      { value: "Party Rooms", label: `${t('partyRooms')}` },
      { value: "Bars", label: `${t('bars')}` },
      { value: "Hotels & Restaurants", label: `${t('hotelsRes')}` },
      {
        value: "Conference & Meetingrooms",
        label: `${t('confMeet')}`,
      },
      { value: "Open Air Spaces", label: `${t('openAir')}` },
      { value: "Night clubs", label: `${t('nightClubs')}` },
    ],
    Entertainment: [
      { value: "", label: "Select..." },
      { value: "DJ", label: "Dj" },
      { value: "Singers ", label: `${t('singers')}` },
      { value: "Magicians  ", label: `${t('magicians')}` },
      { value: "Live Music Bands ", label: `${t('liveMusic')}` },
      { value: "Cover band ", label: `${t('coverBands')}` },
    ],
    Rental: [
      { value: "", label: "Select..." },

      {
        value: "Rental",
        label: `${t('rental')}`,
      },
    ],
    Services: [
      { value: "", label: "Select..." },
      {
        value: "Services",
        label: `${t('services')}`,
      },
    ],
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedCategory && selectedSubcategory) {
      navigate(`/${selectedCategory}`);
    }
  };

  return (
    <div className="">
      <div className="text-[#8D303A] border-b-[1px] border-borde text-2xl font-con py-5 px-10">
        {t('createAnn')}
      </div>
    <div className="max-w-[1220px] px-10">
      <div className="max-w-sm ">
        <h3 className="my-4 text-xl font-con">{t('catSub')}</h3>
        <div className="flex flex-col font-pop gap-2">
          <label className="text-lg">{t('choiceBwCat')}</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-borde w-full rounded-md p-2 mt-2 outline-none"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <label className="text-lg">{t('choiceBwSubcat')}</label>
          <select
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            className="border border-borde w-full rounded-md p-2 mt-2 outline-none"
          >
            {!subcategoriesMap[selectedCategory] && <option>Select</option>}
            {subcategoriesMap[selectedCategory] &&
              subcategoriesMap[selectedCategory].map((subcategory) => (
                <option key={subcategory.value} value={subcategory.value}>
                  {subcategory.label}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <Button onClick={handleNextClick} type="purpleButton">
          {t('next')}
        </Button>
      </div>
      </div>
    </div>
  );
}

export default Prodashboard;
