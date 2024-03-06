import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProLayout from './components/Professionals/prolayout/ProLayout';
import MyAccount from './components/Professionals/pages/Myaccount/MyAccount';
import MyAnnouncements from './components/Professionals/pages/MyAnnouncements/MyAnnouncements';
import Prodashboard from './components/Professionals/pages/ProDashboard/Prodashboard';
import Register from './components/Professionals/auth/Register';
import VenuesForm from './components/Professionals/pages/ProDashboard/VenuesForm/VenuesForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />}/>
        <Route element={<ProLayout />}>
        <Route path='/ProfessionalDashboard' element={<Prodashboard />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/venuesForm' element={<VenuesForm />} />
        <Route path='/myannouncements' element={<MyAnnouncements />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
