import React, {useState} from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
const AddImages = () => {

    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedImages(prevImages => [...prevImages, ...Array.from(files)]);
    };

    const handleUploadClick = () => {
        document.getElementById("fileInput").click();
    };
    const handleRemoveImage = (indexToRemove) => {
        setSelectedImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
      };

  return (
    <div className='flex flex-wrap gap-2 mt-4'>
                    <input
                    id="fileInput"
                    onChange={handleFileChange}
                    style={{display: "none"}}
                    type="file"
                    accept=".jpg, .png" 
                    name=""
                    multiple
                    />
                    <div className="flex w-[121px] h-[100px] items-center justify-center border border-borde rounded-md" onClick={handleUploadClick}>
                        <AiOutlineCloudUpload color='#B3B3B3' size={24} />
                    </div>
                    {selectedImages.map((item, index) => (
                        <div key={index} className='h-[100px] w-[121px] relative'>
                            <IoMdCloseCircle className='absolute -top-2 -right-2 bg-white rounded-full' size={20} color='#8D303A' onClick={() => handleRemoveImage(index)}/>
                            <img src={URL.createObjectURL(item)} className='h-full w-full rounded-sm object-cover' alt={`Selected Image ${index}`} />
                            {console.log(item)}
                        </div>
                    ))}
    </div>
  )
}

export default AddImages