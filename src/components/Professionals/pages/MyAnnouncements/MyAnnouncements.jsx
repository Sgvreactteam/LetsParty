import React from "react";
import { FaSearch } from "react-icons/fa";
import AnnouncementCard from "./AnnouncementCard";

function MyAnnouncements() {
  return (
    <div>
      <div className="text-[#8D303A] border-b-[1px] border-borde text-2xl font-con py-5">
        My Announcements List
      </div>
      <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-borde p-2 mr-2 focus:outline-none mt-4 rounded-md"
      />
    </div>
    <div>
      <AnnouncementCard/>
    </div>
    </div>
  );
}

export default MyAnnouncements;
