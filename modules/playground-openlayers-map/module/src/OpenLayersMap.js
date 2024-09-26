import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Icon, Text, Fill, Stroke } from 'ol/style';
import Overlay from 'ol/Overlay';
import { LineString } from 'ol/geom';


const OpenLayersMap = (props) => {
  const mapRef = useRef();
  const popupRef = useRef();

  useEffect(() => {
    const view = new View({
      center: fromLonLat([props.longitude, props.latitude]),
      zoom: props.zoom,
    });
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: view,
    });

    const toggleInteractions = (enable) => {
      if (enable) {
        map.getInteractions().forEach((interaction) => {
          interaction.setActive(true);
        });
      } else {
        map.getInteractions().forEach((interaction) => {
          interaction.setActive(false);
        });
      }
    };

    toggleInteractions(props.isInteractive);

    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    const overlay = new Overlay({
      element: popupRef.current,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -50],
    });
    map.addOverlay(overlay);

    if (props.pins) {
      props.pins.forEach((pin) => {
        const feature = new Feature({
          geometry: new Point(fromLonLat([pin.longitude, pin.latitude])),
          label: pin.label,
          description: pin.description,
          data: pin,
        });

        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png', // Replace with the path to your pin icon
            }),
            text: new Text({
              text: pin.label,
              offsetY: -25,
              fill: new Fill({
                color: '#000',
              }),
              stroke: new Stroke({
                color: '#fff',
                width: 2,
              }),
            }),
          })
        );

        vectorSource.addFeature(feature);

        // Hover and click events
        map.on('pointermove', (evt) => {
          if (map.hasFeatureAtPixel(evt.pixel)) {
            const hoveredFeature = map.getFeaturesAtPixel(evt.pixel)[0];
            if (hoveredFeature) {
              const coordinates = hoveredFeature.getGeometry().getCoordinates();
              popupRef.current.innerHTML = hoveredFeature.get('description');
              overlay.setPosition(coordinates);
            }
          } else {
            popupRef.current.innerHTML = ''; // Hide description when not hovering
            overlay.setPosition(undefined);
          }
        });

        map.on('click', (evt) => {
          if (map.hasFeatureAtPixel(evt.pixel)) {
            const clickedFeature = map.getFeaturesAtPixel(evt.pixel)[0];
            if (clickedFeature) {
              props.onPinClicked(clickedFeature.get('data'));
            }
          }
        });
      });
    }


    map.getView().on('moveend', () => {
      const view = map.getView();
      const newZoom = view.getZoom();
      const newCenter = toLonLat(view.getCenter());
      props.onViewChange({
        longitude: newCenter[0],
        latitude: newCenter[1],
        zoom: newZoom,
      });
    });

    view.on('change:center', () => {
      const newCenter = toLonLat(view.getCenter());
      const newZoom = view.getZoom();
      props.onViewChange({
        longitude: newCenter[0],
        latitude: newCenter[1],
        zoom: newZoom,
      });
    });

    view.on('change:resolution', () => {
      const newCenter = toLonLat(view.getCenter());
      const newZoom = view.getZoom();
      props.onViewChange({
        longitude: newCenter[0],
        latitude: newCenter[1],
        zoom: newZoom,
      });
    });

    map.on('singleclick', (evt) => {
      if (!map.hasFeatureAtPixel(evt.pixel)) {
        const [lon, lat] = toLonLat(evt.coordinate);
        props.onMapClick({ longitude: lon, latitude: lat });
      }
    });

    // Fetching the route from OSRM API
    const fetchRoute = async (start, end) => {
      const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`
      );
      const data = await response.json();
      const routeCoordinates = data.routes[0].geometry.coordinates.map((coord) =>
        fromLonLat(coord)
      );

      // Creating the route line and adding it to the map
      const routeFeature = new Feature({
        geometry: new LineString(routeCoordinates),
      });
      routeFeature.setStyle(
        new Style({
          stroke: new Stroke({
            color: '#ff0000',
            width: 4,
          }),
        })
      );

      vectorSource.addFeature(routeFeature);
    };

    if (props.pointA && props.pointB) {
      const start = [props.pointA.longitude, props.pointA.latitude];
      const end = [props.pointB.longitude, props.pointB.latitude];
      fetchRoute(start, end);
    }

    return () => map.setTarget(null); // Cleanup map on component unmount
  }, [props]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '500px' }}></div>
      <div ref={popupRef} className="ol-popup" style={{ position: 'absolute', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}></div>
    </div>
  );
};

export default OpenLayersMap;
