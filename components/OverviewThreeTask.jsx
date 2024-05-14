import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaCirclePlus, FaRegCircle } from "react-icons/fa6";

const OverviewThreeTask = () => {
  return (
    <div className="2lg:w-[50%] w-full bg-white shadow-md rounded-lg flex flex-col border">
      <div className="flex justify-between p-8">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Tasks</h1>
          <p className="text-sm text-slate-400">Today</p>
        </div>
        <div>
          <Link href="/" className="text-blue-500">
            View All
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between px-8 py-5 border-b">
          <h1 className="text-slate-400">Create new task</h1>
          <button>
            <FaCirclePlus size={24} className="text-slate-300" />
          </button>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <div className="flex items-center gap-4">
            <FaRegCircle size={20} className="text-slate-400" />
            <h1 className="font-semibold">Finish ticket update</h1>
          </div>
          <button className="px-2 py-1 text-[10px] text-white bg-yellow-500 rounded-lg font-bold">
            URGENT
          </button>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <div className="flex items-center gap-4">
            <FaRegCircle size={20} className="text-slate-400" />
            <h1 className="font-semibold">Create new ticket example</h1>
          </div>
          <button className="px-2 py-1 text-[10px] text-white bg-emerald-500 rounded-lg font-bold">
            NEW
          </button>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <div className="flex items-center gap-4">
            <FaCheckCircle size={20} className="text-blue-500" />
            <h1 className="font-semibold">Update ticket report</h1>
          </div>
          <button className="px-2 py-1 text-[10px] text-slate-400 bg-slate-200 rounded-lg font-bold">
            DEFAULT
          </button>
        </div>
      </div>
    </div>
  );
};
export default OverviewThreeTask;
