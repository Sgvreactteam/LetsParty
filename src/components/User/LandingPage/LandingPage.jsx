import React, {useState} from 'react'
import image from './Group3.jpeg'
import { useTranslation } from 'react-i18next';
import image1 from './image1.jpeg'
import Button from '../../../ui/Button';
import image2 from './image3.jpeg'
import image3 from './image4.jpeg'
import image4 from './image5.jpeg'
import EventsSection from './Events/EventsSection';
import Footer from '../Footer/Footer';
import HorizonatalTabBar from '../horizontalTabBar/HorizonatalTabBar';
// import Header from '../Header/Header';
// import VenuesForm from '../../Professionals/pages/ProDashboard/VenuesForm/VenuesForm';
// import FilterVenues from '../filterPages/FilterVenues';
import { useNavigate } from 'react-router';
import VenueModal from '../Header/VenueModal';
import EnterModal from '../Header/EnterModal';
import LatestNews from '../latestNews/LatestNews';
const LandingPage = () => {
  const navigate = useNavigate();
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [isVenueModalOpen, setIsVenueModalOpen] = useState(false);
    const [isEntertainmentModalOpen, setIsEntertainmentModalOpen] = useState(false);
  


    const categories = [
        { value: "", label: "Select..." },
        { value: "venues", label: `${t('venues')}` },
        { value: "FilterEntertainment1", label: `${t('entertainment')}` },
        { value: "FilterRental", label: `${t('rental')}` },
        { value: "FilterService", label: `${t('services')}` },
      ];
    
      const subcategoriesMap = {
        venues: [
          { value: "", label: "Kind of Event" },
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
        FilterEntertainment1: [
          { value: "", label: "Select..." },
          { value: "DJ", label: "Dj" },
          { value: "Singers ", label: `${t('singers')}` },
          { value: "Magicians  ", label: `${t('magicians')}` },
          { value: "Live Music Bands ", label: `${t('liveMusic')}` },
          { value: "Cover band ", label: `${t('coverBands')}` },
        ],
        FilterRental: [
          { value: "", label: "Select..." },
    
          {
            value: "Rental",
            label: `${t('rental')}`,
          },
        ],
        FilterService: [
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
        if (selectedCategory === 'venues') {
          setIsVenueModalOpen(true);
        } else if (selectedCategory === 'FilterEntertainment1') {
          setIsEntertainmentModalOpen(true);
        } else {
          // Navigate to the corresponding page for rental and services
          navigate(`/filter`);
        }
      };

      const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        // height: "500px",
      };
    
  return (
    <div className=''>
        <div style={backgroundStyle} className="md:h-[500px] h-[400px]">
        <div className="max-w-xl 2xl:max-w-4xl mx-auto flex flex-col justify-center items-center text-white z-10 h-full">
          <div>
            <h2 className="md:text-4xl text-3xl font-light font-pop  text-center">
              {" "}
              {t("celebrate")}{" "}
            </h2>
            <p className="md:text-2xl text-xl font-light font-pop mt-2 text-center">
              {t("reception")}
            </p>
            <form
              className="bg-white flex flex-row justify-center items-center rounded-md p-1 mt-8"
              action=""
            >
              <div className="grid gap-5 sm:grid-cols-3 sm:justify-center sm:items-center w-full">
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="text-black sm:w-48 sm:h-12  w-full
                   mr-4 pr-2 outline-none"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                  className=" sm:border-l border-borde  sm:w-48 sm:h-12 text-black  outline-none"
                >

                    {!subcategoriesMap[selectedCategory] && <option>Select</option>}
                    {subcategoriesMap[selectedCategory] &&
                    subcategoriesMap[selectedCategory].map((subcategory, index) => (
                        <option key={index} value={subcategory.value}>

                        {subcategory.label}
                      </option>
                    ))}
                </select>
                <Button onClick={handleNextClick}  type="purpleButton"> {t('search')} </Button>
               <VenueModal isModalOpen={isVenueModalOpen} setIsModalOpen={setIsVenueModalOpen} />
               <EnterModal isModalOpen={isEntertainmentModalOpen} setIsModalOpen={setIsEntertainmentModalOpen} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 py-6 w-[80%] mx-auto">
        <div className="grid col-span-3">
          <h2 className="text-2xl text-secondary mb-8 text-center">
            {" "}
            {t("welcome")}{" "}
          </h2>
          <p className="text-center"> {t("text-1")} </p>
          <p className="text-center"> {t("text-2")} </p>
          <div className="grid grid-cols-3 justify-center items-center gap-4 pt-8 px-3">
            <div className="flex justify-center items-center">
              <img src={image4} className="w-full" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={image2} className="w-full" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={image3} className="w-full" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:flex hidden ">
          <img src={image1} alt="" className="w-full h-full" />
        </div>
      </div>
        <div className="flex flex-col w-[80%] mx-auto">
        <EventsSection/>
        <HorizonatalTabBar />
        <div>
        <LatestNews/>
        </div>
        </div>
       
    </div>
  )
}

export default LandingPage