import * as Noodl from '@noodl/noodl-sdk';
import { Chart, registerables } from 'chart.js';

import { barNode } from './reactNodes/bar';
import { bubbleNode } from './reactNodes/bubble';
import { doughnutNode } from './reactNodes/doughnut';
import { lineNode } from './reactNodes/line';
import { pieNode } from './reactNodes/pie';
import { polarAreaNode } from './reactNodes/polarArea';
import { radarNode } from './reactNodes/radar';
import { scatterNode } from './reactNodes/scatter';
import { chartNode } from './reactNodes/chart';
import TimeSeriesChart, { data, options } from './reactNodes/TimeSeriesChart';

Chart.register(...registerables);
const lineChartTime = Noodl.defineReactNode({
	name: 'Line Chart Timeseries',
	category: 'chart.js',
	getReactComponent() {
		return TimeSeriesChart;
	},
	inputProps: {
		data: {
			type: '*',
			default: data,
			displayName: '',
			group: '',
		},
		options: {
			type: '*',
			default: options,
			displayName: '',
			group: '',
		},
	},
});

// module
Noodl.defineModule({
	// @ts-expect-error
	name: 'Chart JS',
	reactNodes: [
		lineChartTime,
		barNode,
		bubbleNode,
		doughnutNode,
		lineNode,
		pieNode,
		polarAreaNode,
		radarNode,
		scatterNode,
		chartNode,
	],
	nodes: [],
	settings: [],
	setup() {},
});
