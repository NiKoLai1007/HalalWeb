// src/components/OrdersChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const OrdersChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Orders',
        data: [120, 150, 200, 250, 300, 350],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Orders Chart</h3>
      <Bar data={data} />
    </div>
  );
};

export default OrdersChart;
