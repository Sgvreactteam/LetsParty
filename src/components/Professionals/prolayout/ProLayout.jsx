import React from "react";
import Header from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function ProLayout() {
  return (
    <div>
      <div className=" w-full">
        <Header />
        <div className="flex h-screen">
          <Sidebar />
          <div className=" w-full mt-10 mx-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProLayout;
