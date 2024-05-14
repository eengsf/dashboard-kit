"use client";

import DashboardAside from "@/components/DashboardAside";
import DashboardMain from "@/components/DashboardMain";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { burger } = useSelector((state) => state.counterSlice);
  return (
    <div className="relative flex w-screen gap-3 bg-slate-50">
      <div className="hidden 2md:block">
        <DashboardAside />
      </div>
      <div
        className={`fixed top-0 left-0 z-10 2md:-translate-x-full 2md:opacity-0 transition-all duration-1000 ${
          burger ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}>
        <DashboardAside />
      </div>
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
