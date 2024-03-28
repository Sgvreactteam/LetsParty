import React from 'react'
import { useTranslation } from 'react-i18next';
import authBackground from '../../../assets/auth-background.jpeg'
import Logo from '../../../assets/logo.png'
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';

const ForgotPass = () => {
    const { t } = useTranslation();
  return (
    <div className='relative w-full h-[100vh] flex items-center justify-center'>
      <img src={authBackground} className='absolute z-1 w-full h-full object-cover top-0' alt="" />
      <div className='flex flex-col items-center bg-white lg:w-[40%] md:w-[60%] w-[95%] z-10 p-8 rounded-lg opacity-90'>
        <img className='w-[167px]' src={Logo} alt="" />
        <div className="flex flex-col items-center w-[100%] justify-around">
          {/* <input type="text" placeholder='Name' className='border-2 text-[#CACACA] h-[]' /> */}
          <form className='flex sm:flex-row w-full flex-col flex-wrap justify-around items-center gap-2' action="">

            <Input placeholder={t('email')} type="email" classes="large"  />
            <Input placeholder={t('newpassword')} type="password" classes="large"  />
            <Input placeholder={t('verpassword')} type="password" classes="large"  />
            <Button to="/ProfessionalDashboard" type="purpleButton">{t('submit')}</Button>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default ForgotPass