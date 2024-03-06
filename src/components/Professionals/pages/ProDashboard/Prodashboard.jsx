import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";

function Prodashboard() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const categories = [
    { value: "", label: "Select..." },
    { value: "Venues", label: "Venues" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Rental", label: "Rental" },
    { value: "Services", label: "Services" },
  ];

  const subcategoriesMap = {
    Venues: [
      { value: "", label: "Select..." },
      { value: "Castles", label: "Castles" },
      { value: "Party Rooms", label: "Party Rooms" },
      { value: "Bars", label: "Bars" },
      { value: "Hotels & Restaurants", label: "Hotels & Restaurants" },
      {
        value: "Conference & Meetingrooms",
        label: "Conference & Meetingrooms",
      },
      { value: "Open Air Spaces", label: "Open Air Spaces" },
      { value: "Night clubs", label: "Night clubs" },
    ],
    Entertainment: [
      { value: "", label: "Select..." },
      { value: "DJ", label: "Dj" },
      { value: "Singers ", label: "Singers" },
      { value: "Magicians  ", label: "Magicians " },
      { value: "Live Music Bands ", label: "Live Music Bands" },
      { value: "Cover band ", label: "Cover band" },
    ],
    Rental: [
      { value: "", label: "Select..." },

      {
        value: "Rental",
        label: "Rental",
      },
    ],
    Services: [
      { value: "", label: "Select..." },
      {
        value: "Services",
        label: "Services",
      },
    ],
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    // Do not reset subcategory when category changes
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
    <div className="max-w-[1220px] ">
      <div className="text-[#8D303A] text-2xl font-con">
        Create Announcement
      </div>
      <hr />

      <div className="max-w-sm ">
        <h3 className="my-4 text-xl font-con">Categories & Subcategories</h3>
        <div className="flex flex-col font-pop gap-2">
          <label>Choice between categories</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-borde w-full rounded-md p-2 mt-2"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <label>Choice between subcategories</label>
          <select
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
            className="border border-borde w-full rounded-md p-2 mt-2"
          >
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
          Next
        </Button>
      </div>
    </div>
  );
}

export default Prodashboard;
