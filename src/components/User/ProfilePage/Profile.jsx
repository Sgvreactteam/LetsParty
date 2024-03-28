import React, {useState} from "react";

import { t } from "i18next";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
function Profile() {
  const [editing, setEditing] = useState(false)
  const handleChangePassword = () => {
    setEditing(true)
  }
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const handleNewPass = (event) => {
    setNewPass(event.target.value)
  }
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value)
  }
  return (
    <>
      <div className="bg-[#F8F8F8] pb-20">
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-lg text-secondary text-center font-con my-3">
            My Profile
          </h1>

          <div className="bg-white p-4 flex flex-col gap-2">
            <h2 className="text-lg font-con">{t('personalInfo')}</h2>
            <div className="flex flex-col">
              <label htmlFor="" className="font-pop ">
                {t('name')}
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
                {t('address')}
              </label>
              <textarea
                name=""
                id=""
                placeholder="Street : Avenida Cervantes 5, Elantxobe , Biscay Zip Code : 48310"
                className="font-lato font-medium rounded border border-borde focus:outline-none py-2"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-pop ">
                {t('email')}
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder=""
                className="font-lato  rounded border border-borde focus:outline-none py-2"
              />
            </div>
          {
            editing && <div className="flex flex-col">
              <label htmlFor="">New Password</label>
              <Input state={newPass} onChange={handleNewPass} classes="basic" placeholder=" Enter new password" type="password"></Input>
              <label htmlFor="">Confirm new password</label>
              <Input state={confirmPass} onChange={handleConfirmPass} classes="basic" placeholder="Confirm new password" type="password"></Input>
            </div>
          }
          </div>
          <div className="mt-8 flex justify-between mx-auto w-[90%]">
            <Button type="purpleButton" onClick={handleChangePassword}>Change Password</Button>
            <Button type="purpleButton">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
