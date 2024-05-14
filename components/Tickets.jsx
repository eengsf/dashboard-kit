import { BsSortUp } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

import TicketsFooter from "./TicketsFooter";
import TicketsTable from "./TicketsTable";
import { setSort, setFilter } from "@/store/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Tickets = () => {
  const { sort, filter } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full gap-3 bg-white border rounded-lg shadow-lg">
      <div className="flex justify-between p-4 sm:p-8">
        <div>
          <h1 className="text-lg font-bold">All tickets</h1>
        </div>
        <div className="flex gap-4 sm:gap-10">
          <div className="flex items-center gap-0 sm:gap-2 text-slate-500">
            <div className="hidden sm:block">
              <BsSortUp size={18} />
            </div>
            <select
              value={sort}
              onChange={(e) => dispatch(setSort(e.target.value))}>
              <option value="Sort">Sort Name</option>
              <option value="Asc Sort">Asc Sort</option>
              <option value="Desc Sort">Desc Sort</option>
            </select>
          </div>
          <div className="flex items-center gap-0 sm:gap-2 text-slate-500">
            <div className="hidden sm:block">
              <FaFilter size={14} />
            </div>
            <select
              value={filter}
              onChange={(e) => dispatch(setFilter(e.target.value))}>
              <option value="Filter">Filter</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </div>
      <TicketsTable />
      <TicketsFooter />
    </div>
  );
};

export default Tickets;
