import React, {useState} from 'react'
import Input from '../../../../../ui/Input'
import AddImages from '../../../../../ui/AddImages';
import Button from '../../../../../ui/Button';
const VenuesForm = () => {
  return (
    <div className="max-w-[1220px] ">
        <div className="text-[#8D303A] text-2xl font-con">
            Create Announcement
        </div>
        <p className='mt-8 font-con text-[18px]'>Venues</p> 
        <form className='flex flex-wrap mt-8 font-pop' action="">
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Name</label>
                <Input placeholder="Name" type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Phone Number</label>
                <Input placeholder="Phone Number" type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Website</label>
                <Input placeholder="Website" type="website" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[50%]'>
                <label htmlFor="">Address</label>
                <Input placeholder="Address" type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[50%]'>
                <label htmlFor="">Description</label>
                <Input placeholder="Description" type="text" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Venue Size (in square meters)</label>
                <Input placeholder="Venue Size" type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Maximum Capacity Sitting</label>
                <Input placeholder="Maximum Capacity Sitting" type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Maximum Capacity Standing</label>
                <Input placeholder="Maximum Capacity Standing" type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Maximum Parking Space</label>
                <Input placeholder="Maximum Parking Space" type="number" classes="large"></Input>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">Catering choice</label>
                <select className='p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
            <div className='flex flex-col w-[33%]'>
                <label htmlFor="">The kind of cuisine you cook</label>
                <select className='p-4 border rounded-md border-borde placeholder:text-placeholderText my-2 w-[95%]' name="Catering Choice" id="">
                    <option value="Dinner">Traditional</option>
                    <option value="Lunch">Chinese</option>
                    <option value="Dinner">Italian</option>
                    <option value="Dinner">Mexican</option>
                </select>
            </div>

            <div className="flex flex-col w-[100%]">
                <p>Upload of pictures (max 15)</p>
                <AddImages />
            </div>
            <div className="flex flex-col mt-4">
                <p>Indicate whether the following criteria are fulfilled</p>
                <div className="flex flex-wrap mt-4 gap-2">
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Professional Kitchen</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>With Terrasse</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>With Garden</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Sound system Available</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Lights Available</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Microphone Available</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Beamer + Screens available</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Dancefloor</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Skittle Alley</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Handicapped Accessible</p></div>
                    <div className='flex my-2'><input type="checkbox" name="" id="" /> <p className='ml-2'>Pets Accepted</p></div>
                    
                </div>
            </div>
            <div className="flex justify-between w-full mt-8 mb-8">
                <Button type="grayButton">Back</Button>
                <Button type="purpleButton">Next</Button>
            </div>

        </form>

    </div>
  )
}

export default VenuesForm