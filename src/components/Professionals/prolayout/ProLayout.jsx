import React from "react";
import Header from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function ProLayout() {
  return (
    <div>
      <div className="w-full">
        <Header />
        <div className="flex h-screen pt-20">
          <Sidebar />
          <div className=" w-full overflow-y-auto bg-[#F8F8F8]">
            <div className="mt-5 mx-10">
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProLayout;
