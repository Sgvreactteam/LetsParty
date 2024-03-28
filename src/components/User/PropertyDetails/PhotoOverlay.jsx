import React, {useEffect} from 'react';
import './photoOverlay.css'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
const PhotoOverlay = ({ closeModal, currentPhoto, onPrev, onNext }) => {
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
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
              closeModal();
            }

            
          
          
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
          document.removeEventListener('keydown', handleKeyDown);
        };

        
    
        
      }, [closeModal]);

      useEffect(() => {
        const handleKeyDown = (event) => {
          // Check if the modal is open and the arrow keys are pressed
          if (event.key === 'ArrowRight') {
            onNext(); // Call the function to navigate to the next photo
          } else if (event.key === 'ArrowLeft') {
            onPrev(); // Call the function to navigate to the previous photo
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [onPrev, onNext]);
      
  return (
    <div className="modal-overlay">
        <button onClick={onPrev}><BsArrowLeftCircle size={24} className='absolute button top-[50%] left-2' color='white'/></button>
        <button onClick={onNext}><BsArrowRightCircle size={24} className='absolute button top-[50%] right-2' color='white'/></button>
      <div className="modal-content">
        <img src={currentPhoto.img} className='h-[75vh]' alt={currentPhoto.alt} />
        <button onClick={closeModal}><IoCloseSharp size={24} className='absolute top-0 mt-2 mr-2 right-0' color='white'/></button>
      </div>
    </div>
  );
};

export default PhotoOverlay;