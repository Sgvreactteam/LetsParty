import React from "react";
import { Button, Modal } from "flowbite-react";
import VenueModal from "./VenueModal";
import EnterModal from "./EnterModal";
// function Modaal({ isModalOpen, setIsModalOpen })

function Modaal({ isModalOpen, setIsModalOpen, category, closeModal }) {
  if (category === "Venue") {
    return (
      <VenueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} closeModal={closeModal} />
    );
  } else {
    return (
      <EnterModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} closeModal={closeModal} />
    );
  }
}

export default Modaal;
