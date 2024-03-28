import React, {useEffect} from "react";
import { Modal } from "flowbite-react";
import Button from "../../../ui/Button";


function EnterModal({ isModalOpen, setIsModalOpen, closeModal }) {
  const category = [
    { value: "Birthday", label: "Birthday" },
        { value: "Wedding", label: "Wedding" },
        { value: "Anniversary", label: "Anniversary" },
        { value: "Family Gathering", label: "Family Gathering" },
        { value: "Concert/theatre show", label: "Concert/theatre show" },
        { value: "Product launch", label: "Product launch" },
        { value: "Afterwork", label: "Afterwork" },
        { value: "Conference", label: "Conference" },
        { value: "Business meeting", label: "Business meeting" },
        { value: "Gala/Ceremony", label: "Gala/Ceremony" },

  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

      const handleClickOutside = (event) => {
        const modalContent = document.querySelector(".modal-content");
  
        if (modalContent && !event.target.closest(".modal-content")) {
          // Close the modal if the click is outside the modal content and not on the excluded class
          closeModal();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [closeModal]);


  return (
    <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg modal-content shadow-lg ">
          <Modal.Header className="!border-none"></Modal.Header>
          <Modal.Body className="px-3">
            <div className="text-center font-con text-2xl text-secondary">
              Entertainment
            </div>
            <div className="flex flex-col py-3 ">
              <label htmlFor="" className="font-pop ">
                <h2>What Kind Of Event Do You Want To Organise ?</h2>
              </label>
              <select
                name=""
                id=""
                className="font-lato font-medium rounded border border-borde focus:outline-none py-2"
              >
                {category.map((category, index) => (
                  <option value={category.value} key={index}>{category.label}</option>
                ))}
              </select>
            </div>
            <div className="font-pop text-white flex justify-center">
              <Button to='/filterEnt' onClick={isModalOpen} type="purpleButton">Submit</Button>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default EnterModal;
