import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";

function Prodashboard() {

    const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedPage) {
      navigate(selectedPage);
    }
  };
  return (
    <div className="max-w-[1220px] ">

      <div className="text-[#8D303A] text-2xl font-con">
      Create Announcement
      </div>
      <hr />

      <div className=" max-w-sm ">
        <h3 className="my-4 text-xl font-con">categories & subcategories</h3>
      <div className=" flex flex-col font-pop gap-2">
      <label>Choice between categories</label>
        <select value={selectedPage} onChange={handlePageChange} className=" border border-borde w-full rounded-md p-2 mt-2">
          <option value="">Select...</option>
          <option value="/page1">Page 1</option>
          <option value="/page2">Page 2</option>
      </select>
      <label>Choice between subcategories</label>
        <select value={selectedPage} onChange={handlePageChange} className=" border border-borde w-full rounded-md p-2 mt-2">
          <option value="">Select...</option>
          <option value="/page1">Page 1</option>
          <option value="/page2">Page 2</option>
      </select>
      </div>
      </div>
        
      <div className="flex justify-end pt-56">
      <Button onClick={handleNextClick} type="purpleButton">Next</Button>
      </div>
    </div>
  )
}

export default Prodashboard