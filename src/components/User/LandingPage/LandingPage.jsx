import React, {useState} from 'react'
import image from './Group 3.jpeg'
import { useTranslation } from 'react-i18next';
import image1 from './image 1.jpeg'
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


    
  return (
    <div className='flex relative flex-col'>
        
        <img src={image} className='absolute w-full md:h-[60vh] h-[70vh] object-cover -z-20' alt="" />
        <div className="font-pop flex flex-col items-center text-white z-10 mt-36">
            <p className='md:text-4xl text-3xl font-light -z-20'> {t('celebrate')} </p>
            <p className='md:text-2xl text-xl font-light mt-2 w-[70%] text-center -z-20'>{t('reception')}</p>
            <form className='bg-white flex flex-row rounded-md p-2 mt-8' action="">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="text-black w-48 h-12 mr-4 outline-none"
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
                    className="pl-2 border-l border-borde w-48 h-12 text-black mr-4 outline-none"
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
               
            </form>
        </div>
        <div className="flex md:flex-row flex-col md:mt-40 mt-60 md:w-[80%] w-[90%] mx-auto py-16">
            <div className="flex flex-col md:w-2/3 w-full items-center text-center">
                <p className='text-2xl text-secondary mb-8'> {t('welcome')} </p>
                <p> {t('text-1')} </p>
                <p> {t('text-2')} </p>
                <div className="flex mt-8">
                <img src={image4 } className='w-1/3' alt="" />
                    <img src={image2} className='w-1/3 mx-2' alt="" />
                    <img src={image3} className='w-1/3' alt="" />
                </div>
            </div>
            <div className=' ml-8 mt-12'>
                <img src={image1} alt="" />
            </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
        <EventsSection/>
        <HorizonatalTabBar />
        <div>
        <LatestNews/>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default LandingPage