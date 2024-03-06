import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function MyAccount() {

  const { t } = useTranslation();
  const [textareaHeight, setTextareaHeight] = useState("auto");

  useEffect(() => {
    const textarea = document.getElementById("address");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [textareaHeight]);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center border-b-2 border-[#CCCCCC] py-3 bg-[#F8F8F8]">
        <div className="text-2xl text-secondary">{t('myAcc')}</div>
        <div>
          <button className="flex items-center justify-center text-white bg-primary font-pop border rounded-md py-1 px-3">
            <FaRegEdit size={16} />
            <span className="ms-1">{t('edit')}</span>
          </button>
        </div>
      </div>

      <div className="mt-5 p-4 bg-white">
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
              placeholder="@gmail.com"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('password')}
            </label>
            <input
              type="password"
              placeholder="Password"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('phoneNum')}
            </label>
            <input
              type="tel"
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
              placeholder="David"
              className="font-lato font-medium rounded border border-borde focus:outline-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-pop">
              {t('address')}
            </label>
            <textarea
              id="address"
              className=" font-lato font-medium rounded resize-none border border-borde focus:outline-none p-2"
              placeholder="Street : Avenida Cervantes 5, Elantxobe , Biscay Zip Code : 48310"
              style={{ height: textareaHeight }}
              onChange={(e) => setTextareaHeight(e.target.scrollHeight + "px")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount