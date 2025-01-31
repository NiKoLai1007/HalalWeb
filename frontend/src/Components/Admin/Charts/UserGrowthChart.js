// src/components/UserGrowthChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const UserGrowthChart = () => {
  const data = {
    labels: ['Active Users', 'Inactive Users', 'New Users'],
    datasets: [
      {
        data: [300, 100, 50],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 205, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>User Growth Chart</h3>
      <Pie data={data} />
    </div>
  );
};

export default UserGrowthChart;
