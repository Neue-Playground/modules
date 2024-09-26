// src/components/TimeSeriesChart.js
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

function generateDateFromTimestamp(timestamp) {
	return new Date(timestamp * 1000).toISOString();
}

const timestamps = [
	Math.floor(new Date().getTime() / 1000) - 300,
	Math.floor(new Date().getTime() / 1000) - 360,
	Math.floor(new Date().getTime() / 1000) - 420,
	Math.floor(new Date().getTime() / 1000) - 1200,
	Math.floor(new Date().getTime() / 1000) - 1260,
];

const values = [30, 25, 22, 28, 20];

const chartData = timestamps.map((timestamp, index) => ({
	x: generateDateFromTimestamp(timestamp),
	y: values[index],
}));

export const data = {
	datasets: [
		{
			label: 'Values',
			data: chartData,
			borderColor: 'blue',
			backgroundColor: 'rgba(0, 0, 255, 0.2)',
		},
	],
};

export const options = {
	scales: {
		x: {
			type: 'time',
			time: {
				unit: 'minute',
				tooltipFormat: 'YYYY-MM-DD HH:mm:ss',
				displayFormats: {
					minute: 'HH:mm:ss',
				},
			},
			ticks: {
				source: 'data',
				autoSkip: false,
				callback: function (value) {
					const date = new Date(value);
					const options = {
						month: 'short',
						day: 'numeric',
						hour: 'numeric',
						minute: 'numeric',
					};

					return date.toDateString();
				},
			},
			title: {
				display: true,
				text: 'Time (Unix Timestamp in Miliseconds)',
			},
		},
		y: {
			title: {
				display: true,
				text: 'Values',
			},
		},
	},
};

const TimeSeriesChart = (props: any) => {
	const sizerRef = useRef(null);
	const fixedSizeRef = useRef(null);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const { width, height } = entries[0].target.getBoundingClientRect();
			fixedSizeRef.current.style.width = `${width}px`;
			fixedSizeRef.current.style.height = `${height}px`;
		});

		resizeObserver.observe(sizerRef.current);

		return () => {
			resizeObserver.unobserve(sizerRef.current);
		};
	}, []);

	return (
		<div style={{ position: "relative", width: "100%", height: "100%" }}>
			<div ref={sizerRef} style={{ position: "absolute", inset: 0 }}></div>
			<div style={{ position: "absolute", inset: 0 }}>
				<div ref={fixedSizeRef} style={{ position: "relative" }}>
					<Line
						data={props.data}
						options={props.options}
					/>
				</div>
			</div>
		</div>
	);
};

export default TimeSeriesChart;
