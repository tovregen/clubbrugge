import {
  BarChart as BarRechart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function BarChart({ data }) {
  return (
    <ResponsiveContainer height={250} width="100%">
      <BarRechart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Total" dataKey="total" fill="#0572ff" />
        <Bar name="Successful" dataKey="successful" fill="#000000" />
      </BarRechart>
    </ResponsiveContainer>
  );
}
