import React from "react";
import { Button, Modal } from "flowbite-react";
import VenueModal from "./VenueModal";
import EnterModal from "./EnterModal";
// function Modaal({ isModalOpen, setIsModalOpen })

function Modaal({ isModalOpen, setIsModalOpen, category }) {
  if (category === "Venue") {
    return (
      <VenueModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    );
  } else {
    return (
      <EnterModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    );
  }
}

export default Modaal;
