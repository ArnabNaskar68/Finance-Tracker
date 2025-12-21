import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar"],
  datasets: [
    {
      label: "Sales",
      data: [10, 20, 30],
      backgroundColor: "rgba(54, 162, 235, 0.6)"
    }
  ]
};

export default function Chart() {
  return <Bar data={data} />;
}
