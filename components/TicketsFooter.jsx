import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPageAwal, setPageAkhir } from "@/store/slice/counterSlice";
import { useEffect, useState } from "react";

const TicketsFooter = () => {
  const { page, pageAwal, pageAkhir, pageLength } = useSelector(
    (state) => state.counterSlice
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalItem = 100;
  const totalPage = Math.ceil(totalItem / page);

  useEffect(() => {
    let khs = page - page / currentPage;
    if (khs === 0) {
      khs = 1;
    }
    dispatch(setPageAkhir(currentPage * khs + (page - 1)));
    dispatch(setPageAwal(currentPage * khs));
  }, [currentPage, page, dispatch]);

  function hadleprev() {
    setCurrentPage(currentPage - 1);
    if (currentPage > totalPage) {
      setCurrentPage(currentPage);
    }
  }
  function hadlenext() {
    setCurrentPage(currentPage + 1);
    if (currentPage > totalPage) {
      setCurrentPage(currentPage);
    }
  }

  return (
    <div className="flex justify-end gap-12 px-8 py-5 border rounded-b-lg">
      <div className="flex items-center gap-1 text-slate-400">
        <p>Rows per page: </p>
        <select
          value={page}
          onChange={(e) => dispatch(setPage(e.target.value))}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="flex items-center gap-3 text-slate-400">
        <p>
          {pageAwal} - {pageAkhir} of {pageLength}
        </p>
        <button onClick={hadleprev}>
          <IoIosArrowBack size={16} />
        </button>
        <button onClick={hadlenext}>
          <IoIosArrowForward size={16} />
        </button>
      </div>
    </div>
  );
};

export default TicketsFooter;
