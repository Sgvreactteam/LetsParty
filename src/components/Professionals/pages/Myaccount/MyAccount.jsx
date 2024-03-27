import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Input from "../../../../ui/Input";
import { MdOutlineEdit } from "react-icons/md";
import Button from "../../../../ui/Button";

function MyAccount() {

  const { t } = useTranslation();
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [editing, setEditing] = useState(false)
  const handleChangePassword = () => {
    setEditing(true)
  }
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")

  useEffect(() => {
    const textarea = document.getElementById("address");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [textareaHeight]);

  const handleNewPass = (event) => {
    setNewPass(event.target.value)
  }
  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value)
  }
  return (
    <div className="">
      <div className="flex justify-between items-center border-b-2 border-[#CCCCCC]  bg-[#F8F8F8]">
        <div className="text-2xl text-secondary font-con py-5 pl-10">{t('myAcc')}</div>
        <div className="pr-10 flex gap-4">
          <Button type="purpleButton" onClick={handleChangePassword}>Change Password</Button>
          <Button type="purpleButton">
            <FaRegEdit size={16} />
            <span className="ms-1">{t('edit')}</span>
          </Button>
        </div>
      </div>

      <div className="mt-5 p-4 bg-white px-5 mx-10">
        <h2 className="text-2xl font-con text-center pb-3">
          {t('personalInfo')}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop ">
              {t('email')}
            </label>
            <input
              type="email"
              placeholder="Ex: demo@gmail.com"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('phoneNum')}
            </label>
            <input
              type="number"
              placeholder="Number"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('contactPerson')}
            </label>
            <input
              type="text"
              placeholder=""
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('nameOfCom')}
            </label>
            <input
              type="text"
              placeholder="Name of the company"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('email')}
            </label>
            <input
              type="text"
              placeholder="Email address"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div> <br />
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('address')}
            </label>
            <Input
              id="address"
              classes="textarea"
              placeholder=""

              onChange={(e) => setTextareaHeight(e.target.scrollHeight + "px")}
            />
          </div>
        </div>
          {
            editing && <div className="flex flex-col">
              <label htmlFor="">New Password</label>
              <Input state={newPass} onChange={handleNewPass} classes="small" placeholder=" Enter new password" type="password"></Input>
              <label htmlFor="">Confirm new password</label>
              <Input state={confirmPass} onChange={handleConfirmPass} classes="small" placeholder="Confirm new password" type="password"></Input>
            </div>
          }
          <div className="mt-8 flex flex-end">
            
            <Button type="purpleButton">Save</Button>
          </div>
      </div>
    </div>
  )
}

export default MyAccount