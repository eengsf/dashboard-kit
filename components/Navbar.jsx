"use client";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearchCN } from "@/store/slice/counterSlice";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const { navbar } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [showSeacrh, setShowSeacrh] = useState(false);

  const handleSearch = (event) => {
    setShowSeacrh(!showSeacrh);
    if (!search || search.trim() === "") {
      event.preventDefault();
      dispatch(setSearchCN(null));
    }

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      dispatch(setSearchCN(search));
    }
  };
  return (
    <div className="flex justify-between w-full gap-4 h-[72px] 2md:h-24 ">
      <div className="flex items-center justify-between flex-1 ">
        <div className="flex items-center gap-4">
          <div className="block 2md:hidden">
            <Hamburger />
          </div>
          <h1 className="text-xl font-bold ">{navbar}</h1>
        </div>
        <div className="relative flex items-center gap-2 ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`px-2 bg-transparent border rounded-lg sm:block hidden`}
          />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`px-2 bg-transparent border rounded-lg sm:hidden ${
              showSeacrh
                ? "block absolute right-0 top-12 bg-white p-3 "
                : "hidden"
            }`}
          />

          <button onClick={handleSearch}>
            <CiSearch size={20} className="text-slate-400" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-4">
          <div>
            <FaBell size={18} className="text-slate-300" />
          </div>
          <span className="hidden text-slate-400 2md:block">|</span>
          <h1 className="hidden 2md:block">Shofiyul Fuad</h1>
        </div>
        <div className="w-[35px] h-[35px] rounded-full ">
          <Image
            src="/icon.jpeg"
            width={40}
            height={40}
            alt="user"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
