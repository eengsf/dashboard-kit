import OverviewOne from "./OverviewOne";
import OverviewTwoChart from "./OverviewTwoChart";
import OverviewTwoBlok from "./OverviewTwoBlok";
import OverviewThreeUnresolved from "./OverviewThreeUnresolved";
import OverviewThreeTask from "./OverviewThreeTask";

const Overview = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="grid w-full grid-cols-2 gap-3 pt-3 2md:gap-5 2md:flex 2lg:gap-10">
        <OverviewOne />
      </div>
      <div className="flex flex-col w-full bg-white border rounded-lg shadow-md xl:flex-row">
        <div className="flex xl:w-[75%] w-full md:p-8 p-4 flex-col">
          <OverviewTwoChart />
        </div>
        <div className="grid flex-col flex-1 w-auto grid-cols-1 2md:flex 2md:flex-row xl:flex-col sm:grid-cols-2">
          <OverviewTwoBlok name="Resolved" value="449" />
          <OverviewTwoBlok name="Received" value="426" />
          <OverviewTwoBlok name="Average first response time" value="33m" />
          <OverviewTwoBlok name="Average response time" value="3h 8m" />
          <OverviewTwoBlok name="Resolution within SLA" value="94%" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-5 xl:gap-10 2lg:flex-row">
        <OverviewThreeUnresolved />
        <OverviewThreeTask />
      </div>
    </div>
  );
};

export default Overview;
