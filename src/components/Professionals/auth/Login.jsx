import React from 'react'
import { useTranslation } from 'react-i18next';
import authBackground from '../../../assets/auth-background.jpeg'
import Logo from '../../../assets/logo.png'
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { Link } from 'react-router-dom';

const Login = () => {
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
            <Input placeholder={t('password')} type="password" classes="large"  />
            <Button to="/landingPage" type="purpleButton">{t('login')}</Button>
          </form>
          <div className="flex justify-between w-full mt-8">
            <Link className='p-2 border rounded-sm' to='/ProfessionalRegister'>{t('createAcc')}</Link>
            <Link to="/userForgotpass" className='p-2 border rounded-sm'>{t('forgotPass')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login