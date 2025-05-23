import React from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker } from 'react-leaflet';
import type { Coord } from '../tasks/tasks';
import 'leaflet/dist/leaflet.css';

interface MapViewProps {
  border: Coord[];
  current: Coord;
  route: Coord[];
  locations: Coord[];
  zoom?: number;
}

const MapView: React.FC<MapViewProps> = ({ 
  border, 
  current,
  route, 
  locations,
  zoom = 13 
}) => {
  // Convert Coord objects to [lat, lng] tuples for react-leaflet
  const borderPositions: [number, number][] = border.map(coord => [coord.lat, coord.long]);
  const routePositions: [number, number][] = [...route, current].map(coord => [coord.lat, coord.long]);
  
  // Calculate center if not provided
  const mapCenter: [number, number] = [current.lat, current.long]

  // Get the last coordinate of the route for the marker

  return (
    <MapContainer
      center={mapCenter}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Border polyline in black */}
      {borderPositions.length > 0 && (
        <Polyline
          positions={borderPositions}
          color="black"
          weight={3}
          opacity={0.8}
        />
      )}
      
      {/* Route polyline in red */}
      {routePositions.length > 0 && (
        <Polyline
          positions={routePositions}
          color="blue"
          weight={3}
          opacity={0.8}
        />
      )}
      {locations.map((loc, index) => (
        <CircleMarker
            key={index}
          center={[loc.lat, loc.long]}
          radius={5}
          fillColor="orange"
          color="darkorange"
          weight={2}
          opacity={1}
          fillOpacity={0.8}
        />
      ))}
      
      {/* Marker for the last coordinate of the route */}
      {current && (
        <CircleMarker
          center={[current.lat, current.long]}
          radius={8}
          fillColor="red"
          color="darkred"
          weight={2}
          opacity={1}
          fillOpacity={0.8}
        />
      )}
    </MapContainer>
  );
};

// Helper function to calculate the center of all coordinates
// function calculateCenter(coords: Coord[]): [number, number] {
//   if (coords.length === 0) {
//     return [0, 0];
//   }
  
//   const totalLat = coords.reduce((sum, coord) => sum + coord.lat, 0);
//   const totalLong = coords.reduce((sum, coord) => sum + coord.long, 0);
  
//   return [totalLat / coords.length, totalLong / coords.length];
// }

export default MapView;
