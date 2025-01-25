"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Active", "Upcoming", "Pending", "Private", "Draft", "Inactive"],
  datasets: [
    {
      data: [65, 10, 8, 7, 6, 4],
      backgroundColor: ["#10B981", "#3B82F6", "#EC4899", "#111827", "#6B7280", "#E5E7EB"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
      labels: {
        boxWidth: 10,
        padding: 10,
        font: {
          size: 12,
        },
      },
    },
  },
};

export function CourseStatus() {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <h3 className="mb-4 text-base font-semibold sm:text-lg">Course Status</h3>
      <div className="h-[300px] w-full">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
