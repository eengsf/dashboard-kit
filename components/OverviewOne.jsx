"use client";

import { useState } from "react";

const OverviewOne = () => {
  const [overviewOne, setOverviewOne] = useState("Unresolved");
  return (
    <>
      <button
        onClick={() => setOverviewOne("Unresolved")}
        className={`flex flex-col 2md:w-[25%] w-full items-center gap-2 rounded-lg border shadow-md py-5 bg-white ${
          overviewOne === "Unresolved" && "border-blue-600 text-blue-600"
        }`}>
        <h1 className="text-lg text-slate-400">Unresolved</h1>
        <p className="text-4xl font-bold">60</p>
      </button>
      <button
        onClick={() => setOverviewOne("Overdue")}
        className={`flex flex-col 2md:w-[25%] w-full items-center gap-2 rounded-lg border shadow-md py-5 bg-white ${
          overviewOne === "Overdue" && "border-blue-600 text-blue-600"
        }`}>
        <h1 className="text-lg text-slate-400">Overdue</h1>
        <p className="text-4xl font-bold">16</p>
      </button>
      <button
        onClick={() => setOverviewOne("Open")}
        className={`flex flex-col 2md:w-[25%] w-full items-center gap-2 rounded-lg border shadow-md py-5 bg-white ${
          overviewOne === "Open" && "border-blue-600 text-blue-600"
        }`}>
        <h1 className="text-lg text-slate-400">Open</h1>
        <p className="text-4xl font-bold">43</p>
      </button>
      <button
        onClick={() => setOverviewOne("On Hold")}
        className={`flex flex-col 2md:w-[25%] w-full items-center gap-2 rounded-lg border shadow-md py-5 bg-white ${
          overviewOne === "On Hold" && "border-blue-600 text-blue-600"
        }`}>
        <h1 className="text-lg text-slate-400">On Hold</h1>
        <p className="text-4xl font-bold">64</p>
      </button>
    </>
  );
};

export default OverviewOne;
