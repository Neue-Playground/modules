const Noodl = require('@noodl/noodl-sdk');
const { default: OpenLayersMap } = require('./OpenLayersMap');
const pointA = {
	label: 'Point A',
	longitude: 12.4924,
	latitude: 41.8902,
};

const pointB = {
	label: 'Point B',
	longitude: 16.4964,
	latitude: 41.9028,
};

const MyCustomReactComponentNode = Noodl.defineReactNode({
	name: 'Map Component',
	category: 'Tutorial',
	getReactComponent() {
		return OpenLayersMap;
	},
	inputProps: {
		isInteractive: {
			displayName: 'Is Interactive',
			group: 'Interactive',
			type: 'boolean',
			default: true
		},
		zoom: {
			displayName: 'Zoom',
			group: 'Coordinates',
			type: 'number',
			default: 2
		},
		longitude: {
			displayName: 'Longitude',
			group: 'Coordinates',
			type: 'number',
			default: 0
		},
		latitude: {
			displayName: 'Latitude',
			group: 'Coordinates',
			type: 'number',
			default: 0
		},
		pins: {
			displayName: 'Pins',
			group: 'Pins',
			type: 'array',
			default: []
		},
		pointA: {
			displayName: 'Point A',
			group: 'Points',
			type: 'object',
			default: {}
		},
		pointB: {
			displayName: 'Point B',
			group: 'Points',
			type: 'object',
			default: {}
		},
	},
	outputProps: {
		onPinClicked: {
			type: 'signal',
			displayName: 'On Pin Clicked'
		},
		onMapClick: {
			type: 'signal',
			displayName: 'On Map Clicked'
		},
		onViewChange: {
			type: 'signal',
			displayName: 'On View Change'
		},
	}
});

Noodl.defineModule({
	reactNodes: [
		MyCustomReactComponentNode
	],
	nodes: [],
	setup() {
		//this is called once on startup
	}
});
