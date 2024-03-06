import React from 'react'
import authBackground from '../../../assets/auth-background.jpeg'
import Logo from '../../../assets/logo.png'
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();
  return (
    <div className='relative w-full h-[100vh] flex items-center justify-center'>
      <img src={authBackground} className='absolute z-1 w-full h-full object-cover top-0' alt="" />
      <div className='flex flex-col items-center bg-white lg:w-[60%] md:w-[80%] w-[95%] z-10 p-8 rounded-lg opacity-90'>
        <img className='w-[167px]' src={Logo} alt="" />
        <div className="flex flex-col items-center w-[100%] justify-around">
          {/* <input type="text" placeholder='Name' className='border-2 text-[#CACACA] h-[]' /> */}
          <form className='flex sm:flex-row w-full flex-col flex-wrap justify-around items-center gap-2' action="">
            <Input placeholder={t('name')} type="text" classes="small"  />
            <Input placeholder={t('email')} type="email" classes="small"  />
            <Input placeholder={t('phoneNum')} type="number" classes="small"  />
            <Input placeholder={t('nameOfContact')} type="text" classes="small"  />
            <Input placeholder={t('address')} type="text" classes="large" />
            <Button to="/ProfessionalDashboard" type="purpleButton">{t('register')}</Button>
          </form>
          <span className='mt-4'>{t('alreadyHaveAnAccount')} {t('login')}</span>
        </div>
      </div>
    </div>
  )
}

export default Register