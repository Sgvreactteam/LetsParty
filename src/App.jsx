import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProLayout from "./components/Professionals/prolayout/ProLayout";
import MyAccount from "./components/Professionals/pages/Myaccount/MyAccount";
import MyAnnouncements from "./components/Professionals/pages/MyAnnouncements/MyAnnouncements";
import Prodashboard from "./components/Professionals/pages/ProDashboard/Prodashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProLayout />}>
          <Route index element={<Prodashboard />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myannouncements" element={<MyAnnouncements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
