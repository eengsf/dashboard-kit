"use client";

import Navbar from "@/components/Navbar";
import Tickets from "@/components/Tickets";
import Overview from "./Overview";
import { useSelector } from "react-redux";
const DashboardMain = () => {
  const { navbar } = useSelector((state) => state.counterSlice);
  return (
    <main className="flex flex-col flex-1 pb-16">
      <div className="sticky top-0 z-10 px-5 bg-white shadow-md 2md:shadow-none 2md:px-8 2md:bg-transparent 2md:static">
        <Navbar />
      </div>
      <div className="w-screen 2md:w-auto">
        <div className="px-5 sm:px-8">
          {navbar === "Overview" && <Overview />}
        </div>
        <div className="px-0 2md:px-8">
          {navbar === "Tickets" && <Tickets />}
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;
