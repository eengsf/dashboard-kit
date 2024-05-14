import Link from "next/link";

const OverviewThreeUnresolved = () => {
  return (
    <div className="2lg:w-[50%] w-full bg-white shadow-md rounded-lg flex flex-col border">
      <div className="flex justify-between p-8">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Unresolved Tickets</h1>
          <p className="text-sm">
            <span className="text-slate-400">Group:</span> Support
          </p>
        </div>
        <div>
          <Link href="/" className="text-blue-500">
            View Detail
          </Link>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between px-8 py-5 border-b">
          <h1 className="font-semibold">Waiting on Feature Request</h1>
          <p className="text-slate-400">4238</p>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <h1 className="font-semibold">Awaiting Customer Response</h1>
          <p className="text-slate-400">1005</p>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <h1 className="font-semibold">Awaiting Developer Fix</h1>
          <p className="text-slate-400">914</p>
        </div>
        <div className="flex justify-between px-8 py-5 border-b">
          <h1 className="font-semibold">Pending</h1>
          <p className="text-slate-400">281</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewThreeUnresolved;
