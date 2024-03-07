import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";

const AddVideo = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedVideos((prevVideos) => [...prevVideos, ...Array.from(files)]);
  };

  const handleUploadClick = () => {
    document.getElementById("videoInput").click();
  };

  const handleRemoveVideo = (indexToRemove) => {
    setSelectedVideos((prevVideos) =>
      prevVideos.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <input
        id="videoInput"
        onChange={handleFileChange}
        style={{ display: "none" }}
        type="file"
        accept=".mp4, .avi, .mov"
        name=""
        multiple
      />
      <div
        className="flex w-[121px] h-[100px] items-center justify-center border border-borde rounded-md"
        onClick={handleUploadClick}
      >
        <AiOutlineCloudUpload color="#B3B3B3" size={32} />
      </div>
      {selectedVideos.map((item, index) => (
        <div key={index} className="h-[100px] w-[121px] relative">
          <IoMdCloseCircle
            className="absolute -top-2 -right-2 bg-white rounded-full"
            size={20}
            color="#8D303A"
            onClick={() => handleRemoveVideo(index)}
          />
          <video
            src={URL.createObjectURL(item)}
            className="h-full w-full rounded-sm object-cover"
            controls
            alt={`Selected Video ${index}`}
          />
          {console.log(item)}
        </div>
      ))}
    </div>
  );
};

export default AddVideo;
