"use client";

import { getApiData } from "@/libs/api-lib";
import { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setPageLength } from "@/store/slice/counterSlice";

const TicketsTable = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(null);
  const { page, pageAwal, pageAkhir, sort, filter, searchCN } = useSelector(
    (state) => state.counterSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiData();
        const result = data.slice(pageAwal - 1, pageAkhir);

        const sortedData =
          sort === "Asc Sort"
            ? result.sort((a, b) =>
                a.customerName.localeCompare(b.customerName)
              )
            : sort === "Desc Sort"
            ? result.sort((a, b) =>
                b.customerName.localeCompare(a.customerName)
              )
            : result;
        const filteredData =
          filter === "Low"
            ? sortedData.filter(
                (item) => item.customerName.split(" ")[0].length < 5
              )
            : filter === "Normal"
            ? sortedData.filter(
                (item) => item.customerName.split(" ")[0].length === 5
              )
            : filter === "High"
            ? sortedData.filter(
                (item) => item.customerName.split(" ")[0].length > 5
              )
            : sortedData;
        const searchCustomerName =
          searchCN === null
            ? filteredData
            : filteredData.filter((item) =>
                item.customerName.toLowerCase().includes(searchCN.toLowerCase())
              );

        setData(searchCustomerName);
        setLength(data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page, pageAwal, pageAkhir, sort, filter, searchCN]);

  dispatch(setPageLength(length));

  function getTimeAgo(createdAt) {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
    const timeDifference = currentDate.getTime() - createdDate.getTime();
    const secondsDifference = timeDifference / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = hoursDifference / 24;

    if (hoursDifference < 1) {
      const minutes = Math.round(minutesDifference);
      return `${minutes} ${minutes > 1 ? "minutes" : "menit"} ago`;
    } else if (hoursDifference < 24) {
      const hours = Math.round(hoursDifference);
      return `${hours} ${hours > 1 ? "hours" : "hours"} ago`;
    } else {
      const day = Math.round(daysDifference);
      return `${day} ${day > 1 ? "days" : "hari"} ago`;
    }
  }
  function getHours(datee) {
    const dateString = datee;
    const date = new Date(dateString);
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedTime;
  }
  function getAcak(createdAt) {
    const dateString = createdAt;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  function getPriority(priority) {
    const firstWord = priority.split(" ")[0];
    const wordLength = firstWord.length;
    const level = wordLength < 5 ? "low" : wordLength < 6 ? "normal" : "high";
    return level;
  }
  return (
    <div className="w-full px-4 sm:px-8">
      <table border="1" className="w-full">
        <thead>
          <tr>
            <th className="text-start text-slate-400 2md:w-[50%] font-normal py-3 ">
              Ticket details
            </th>
            <th className="py-3 font-normal text-start text-slate-400">
              <h1 className="block sm:hidden">Customer</h1>
              <h1 className="hidden sm:block">Customer name</h1>
            </th>
            <th className="py-3 font-normal text-start text-slate-400">Date</th>
            <th className="py-3 font-normal text-start text-slate-400">
              Priority
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((ticket) => (
            <tr key={ticket.id}>
              <td className="py-4 border-t">
                <div className="flex gap-3 pe-2">
                  <div className="w-[40px] h-[40px] rounded-full ">
                    <img
                      src={ticket.avatar}
                      width={40}
                      height={40}
                      alt="user"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h1 className="hidden text-sm font-semibold sm:block">
                      {ticket.ticketDetail}
                    </h1>
                    <h1 className="block text-sm font-semibold sm:hidden">
                      {ticket.ticketDetail.slice(0, 10)}...
                    </h1>
                    <p className="text-sm text-slate-400">
                      {getTimeAgo(ticket.createdAt)}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-4 border-t">
                <div className="flex flex-col px-1">
                  <h1 className="text-sm font-semibold">
                    {ticket.customerName}
                  </h1>
                  <p className="text-sm text-slate-400">
                    on {getAcak(ticket.createdAt)}
                  </p>
                </div>
              </td>
              <td className="py-4 border-t">
                <div className="flex flex-col px-1">
                  <h1 className="text-sm font-semibold">
                    {new Date(ticket.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h1>
                  <p className="text-sm text-slate-400">
                    {getHours(ticket.date)}
                  </p>
                </div>
              </td>
              <td className="py-4 border-t">
                <div className="flex items-center justify-between px-1">
                  <button
                    className={`px-3 py-1 text-[10px] font-semibold text-white  rounded-lg ${
                      getPriority(ticket.customerName) === "low"
                        ? "bg-yellow-500"
                        : getPriority(ticket.customerName) === "normal"
                        ? "bg-green-500"
                        : getPriority(ticket.customerName) === "high"
                        ? "bg-red-500"
                        : ""
                    }`}>
                    {getPriority(ticket.customerName)}
                  </button>
                  <button>
                    <FaEllipsisVertical size={20} className="text-slate-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsTable;
