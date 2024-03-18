import React from "react";

function Profile() {
  return (
    <>
      <div className="bg-[#F8F8F8]">
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-lg text-secondary text-center font-con my-3">
            My Profile
          </h1>

          <div className="bg-white p-4">
            <h2 className="text-lg font-con">Personal Information</h2>
            <div className="flex flex-col">
              <label htmlFor="" className="font-pop ">
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="David"
                className="font-lato  rounded border border-borde focus:outline-none py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-pop ">
                Address
              </label>
              <textarea
                name=""
                id=""
                placeholder="Street : Avenida Cervantes 5, Elantxobe , Biscay Zip Code : 48310"
                className="font-lato font-medium rounded border border-borde focus:outline-none py-2"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
