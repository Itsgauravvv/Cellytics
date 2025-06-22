import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const UsersFilesAreaChart = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-white p-6 rounded-2xl shadow-xl"
  >
    <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Users & Files Overview</h3>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00bcd4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0f7fa" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#90A4AE" />
        <YAxis tick={{ fontSize: 12 }} stroke="#90A4AE" />
        <Tooltip
          contentStyle={{ backgroundColor: "#ffffff", borderRadius: "8px", border: "1px solid #ddd" }}
          labelStyle={{ color: "#333", fontWeight: "500" }}
          cursor={{ stroke: "#00bcd4", strokeWidth: 1 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#00bcd4"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUsers)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </motion.div>
);

export default UsersFilesAreaChart;
