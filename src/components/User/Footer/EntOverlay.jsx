import { useEffect } from 'react'
import React from 'react'
import Button from '../../../ui/Button'
import './overlay.css'
const EntOverlay = ({ closeModal }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
          const modalContent = document.querySelector(".modal-content");
    
          if (modalContent && !event.target.closest(".modal-content")) {
            // Close the modal if the click is outside the modal content and not on the excluded class
            closeModal();
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [closeModal]);
  return (
    <div className='modal-overlay'>
        <div className='bg-white text-black p-8 rounded-md modal-content'>
        <div className="text-center font-con text-2xl text-secondary">
              Entertainment
            </div>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="font-pop ">
                <h2>What Kind Of Event Do You Want To Organise ?</h2>
              </label>
              <select
                name=""
                id=""
                className="font-lato font-medium rounded border border-borde focus:outline-none py-2"
              >
                <option value="">Entertainment</option>
              </select>
            </div>
            <div className="font-pop text-white flex justify-center">
              <Button onClick={closeModal} to='/filterEnt' type="purpleButton">Submit</Button>
            </div>
        </div>
    </div>
  )
}

export default EntOverlay