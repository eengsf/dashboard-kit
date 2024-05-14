"use client";

import { useDispatch, useSelector } from "react-redux";
import { setNavbar } from "@/store/slice/counterSlice";
import { FaChartPie } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosRibbon } from "react-icons/io";

const DashboardAside = () => {
  const { navbar } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <aside
      className={`flex flex-col w-56 bg-[#363740] text-slate-400 sticky top-0 h-screen`}>
      <div className="flex items-center justify-center h-24 text-center ">
        <h1 className="text-xl font-bold ">Dashboard Kit</h1>
      </div>
      <div className="flex flex-col pb-4 border-b border-slate-400">
        <button
          onClick={() => dispatch(setNavbar("Overview"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Overview" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaChartPie size={18} />
          Overview
        </button>
        <button
          onClick={() => dispatch(setNavbar("Tickets"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Tickets" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaTicketAlt size={18} />
          Tickets
        </button>
        <button
          onClick={() => dispatch(setNavbar("Ideas"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Ideas" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaLightbulb size={18} />
          Ideas
        </button>
        <button
          onClick={() => dispatch(setNavbar("Contacts"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Contacts" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaUsers size={18} />
          Contacts
        </button>
        <button
          onClick={() => dispatch(setNavbar("Agents"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Agents" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaUserTie size={18} />
          Agents
        </button>
        <button
          onClick={() => dispatch(setNavbar("Articles"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Articles" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <FaBook size={18} />
          Articles
        </button>
      </div>
      <div className="flex flex-col pt-4">
        <button
          onClick={() => dispatch(setNavbar("Settings"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Settings" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <IoSettingsSharp size={18} />
          Settings
        </button>
        <button
          onClick={() => dispatch(setNavbar("Subscription"))}
          className={`w-full text-start py-3 pl-5 flex gap-3 items-center ${
            navbar === "Subscription" &&
            "border-l-4 border-slate-200 bg-slate-700 text-slate-200"
          }`}>
          <IoIosRibbon size={18} />
          Subscription
        </button>
      </div>
    </aside>
  );
};

export default DashboardAside;
