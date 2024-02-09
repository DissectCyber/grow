import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TemperatureChart = () => {
	const data = {
		labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
		datasets: [
			{
				label: 'Plant Temperature (C)',
				data: [22, 24, 21, 23,25],
				fill: false,
				backgroundColor: 'rgb(75, 192, 192)',
				borderColor: 'rgba(75, 192, 192, 0.2)',
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return <Line data={data} options={options} />;
};

export default TemperatureChart;
