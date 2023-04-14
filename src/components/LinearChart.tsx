import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { chartData } from "../utils/statsData";

const LinearChart: React.FC = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        width={730}
        height={250}
        data={chartData}
      >
        <CartesianGrid />
        <XAxis dataKey='date' />
        <Tooltip />
        <Line type='monotone' dataKey='value' stroke='#82ca9d' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LinearChart;
