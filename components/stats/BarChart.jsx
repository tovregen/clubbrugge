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
import { withTranslation } from "../../i18n";

export default withTranslation("common")(function BarChart({ data, t }) {
  return (
    <ResponsiveContainer height={250} width="100%">
      <BarRechart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name={t("total")} dataKey="total" fill="#0572ff" />
        <Bar name={t("successful")} dataKey="successful" fill="#000000" />
      </BarRechart>
    </ResponsiveContainer>
  );
})
