import React from 'react'
import { useTranslation } from 'react-i18next';
import img1 from './image 3.jpeg'
import img2 from './image 4.jpeg'
import img3 from './image 5.jpeg'
import img4 from './image 6.png'
import './events.css'
const EventsSection = () => {

    const { t } = useTranslation();

    const events = [
        {
            id: 1,
            name: t('venues'),
            desc: t('venueDesc'),
            src: img1
        },
        {
          id: 2,
          name: t('entertainment'),
          desc: t('entDesc'),
          src: img2
      },
      {
        id: 3,
        name: t('rental'),
        desc: t('rentalDesc'),
        src: img3
    },
    {
      id: 4,
      name: t('services'),
      desc: t('servicesDesc'),
      src: img4
  },
    ]
  return (
    <div className='flex flex-col mb-20 font-pop mx-auto'>
      <p className='text-secondary text-2xl mx-auto'> {t('findyour')} </p>
      <div className="flex md:flex-row flex-col mt-8 gap-4">
        {events.map((event) => (
          <div key={event.id} className='flex relative flex-col md:w-1/4 w-full image'>
            <img src={event.src} />
            <p className='mx-auto text-textPri mt-4'>{event.name}</p>
            <p className='absolute desc bg-white text-textSecondary font-light flex flex-col items-center'> <p className='mb-2 text-textPri'>{event.name}</p> {event.desc}</p>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default EventsSection