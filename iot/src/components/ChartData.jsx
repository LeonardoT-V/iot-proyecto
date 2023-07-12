import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ChartData({ data, title, toGraph, color }) {
  return (
    <div className="px-2 py-4 rounded-md border border-gray-300/400 flex flex-col gap-4">
      <h2 className="text-xl text-center font-bold text-black/50 capitalize">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300/40" />
          <XAxis dataKey="key" stroke="#000" tick={false} />
          <YAxis stroke="#000" />
          <Tooltip />
          <Legend />
          <Line
            type="bump"
            dataKey={toGraph}
            stroke={color}
            dot={false}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartData;
