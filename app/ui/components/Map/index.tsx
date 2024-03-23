"use client";

import { useState, useRef } from "react";
import {
  APIProvider,
  Map as MapComponent,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

const markers = [
  {
    name: "PNC Park",
    lat: 40.4473553,
    lng: -80.0081783,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🏟️",
  },
  {
    name: "The Beerhive",
    lat: 40.4520998,
    lng: -79.9875882,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🍺",
  },
  {
    name: "Remedy",
    lat: 0.4789968,
    lng: -79.9581093,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🥃",
  },
  {
    name: "Spirit",
    lat: 40.4786379,
    lng: -79.959153,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🎵",
  },
  {
    name: "Airbnb",
    lat: 40.4668278,
    lng: -80.0301521,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    isStay: true,
    emoji: "🏠",
  },
  {
    name: "Brillobox",
    lat: 40.4656218,
    lng: -79.9573464,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🍸",
  },
  {
    name: "Rivers Casino",
    lat: 40.4478179,
    lng: -80.0257769,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🎰",
  },
  {
    name: "tako",
    lat: 40.4423048,
    lng: -80.0047373,
    address: "1234 1st Ave. Pittsburgh, PA 44444",
    emoji: "🌮",
  },
];

const tripLocation = { lat: 40.4313392, lng: -80.0629007 };

const MapMarker = ({ marker }: any) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, adMarker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => setInfowindowOpen(true)}
        title={marker.name}
      >
        <div className="text-xl">{marker.emoji}</div>
      </AdvancedMarker>
      {infowindowOpen ? (
        <InfoWindow
          anchor={adMarker}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <div className="py-1">
            <h4 className="uppercase font-bold text-xs">{marker.name}</h4>
            <p className="text-xs">{marker.address}</p>
          </div>
        </InfoWindow>
      ) : null}
    </>
  );
};

const Map = () => (
  <APIProvider
    apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ""}
    libraries={["marker"]}
  >
    <MapComponent
      mapId="24b31ffef1dd7117"
      className="w-full h-80 rounded-md"
      defaultCenter={{ lat: tripLocation.lat, lng: tripLocation.lng }}
      defaultZoom={12}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {markers.map((marker) => (
        <MapMarker marker={marker} key={marker.name} />
      ))}
    </MapComponent>
  </APIProvider>
);

export default Map;
