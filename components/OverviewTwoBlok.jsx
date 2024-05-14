const OverviewTwoBlok = ({ name, value }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-5 py-6 border rounded-tr-lg  2md:w-1/5 xl:w-auto xl:px-0">
        <h1 className="text-center text-slate-400">{name}</h1>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </>
  );
};

export default OverviewTwoBlok;
