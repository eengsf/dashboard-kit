import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
];

const Chart = () => {
  return (
    <div className="2lg:w-[800px] 2lg:h-[400px] 2md:w-[560px] 2md:h-[280px] md:w-[600px] md:h-[300px] sm:w-[500px] sm:h-[250px] w-[300px] h-[150px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width="100%"
          height="100%"
          data={data}
          margin={{ top: 5, right: 0, bottom: 0, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="blue" />
          <Line type="monotone" dataKey="pv" stroke="#8a96a8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
