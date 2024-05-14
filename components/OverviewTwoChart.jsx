import Chart from "./Chart";
import { GoHorizontalRule } from "react-icons/go";

const OverviewTwoChart = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="font-bold">Today{`'`}s trends</h1>
        <div className="flex flex-col justify-between sm:flex-row">
          <p className="text-xs text-slate-400">as of 12 May 2024, 03.00 PM</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <GoHorizontalRule size={27} className="text-blue-700" />
              <p className="text-xs text-slate-400">Today</p>
            </div>
            <div className="flex items-center gap-2">
              <GoHorizontalRule size={27} className="text-slate-500" />
              <p className="text-xs text-slate-400">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-3">
        <Chart />
      </div>
    </>
  );
};

export default OverviewTwoChart;
