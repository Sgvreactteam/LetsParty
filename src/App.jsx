import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProLayout from './components/Professionals/prolayout/ProLayout';
import MyAccount from './components/Professionals/pages/Myaccount/MyAccount';
import MyAnnouncements from './components/Professionals/pages/MyAnnouncements/MyAnnouncements';
import Prodashboard from './components/Professionals/pages/ProDashboard/Prodashboard';
import Register from './components/Professionals/auth/Register';
import VenuesForm from './components/Professionals/pages/ProDashboard/VenuesForm/VenuesForm';
import EntertainmentForm from './components/Professionals/pages/ProDashboard/EntertainmentForm/EntertainmentForm';
import Rental from './components/Professionals/pages/ProDashboard/rentalForm/Rental';
import ServicesForm from './components/Professionals/pages/ProDashboard/servicesForm/ServicesForm';
import AnnouncementStep3 from './components/Professionals/pages/ProDashboard/createAnnouncementStep3/AnnouncementStep3';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />}/>
        <Route element={<ProLayout />}>
        <Route path='/ProfessionalDashboard' element={<Prodashboard />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/venues' element={<VenuesForm />} />
        <Route path='/Entertainment' element={<EntertainmentForm />} />
        <Route path='/Rental' element={<Rental />} />
        <Route path='/Services' element={<ServicesForm />} />
        <Route path='/myannouncements' element={<MyAnnouncements />} />
        <Route path='/myannouncementss' element={<AnnouncementStep3 />} />

    
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
