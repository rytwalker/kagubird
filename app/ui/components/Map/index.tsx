"use client";

import { useState } from "react";
import {
  APIProvider,
  Map as MapComponent,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

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
        {marker.emoji ? (
          <div className="text-xl">{marker.emoji}</div>
        ) : (
          <div
            className="border bg-kagu-green-500 border-kagu-green-700"
            style={{
              width: 16,
              height: 16,
              position: "absolute",
              top: 0,
              left: 0,
              border: "2px solid",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
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
const getMarkers = (trip: any) => {
  if (!trip.activities?.length) return [];
  const stays = (trip.stays || []).reduce((acc: any, cur: any) => {
    return [...acc, { ...cur, emoji: "🏠" }];
  }, []);

  return trip.activities.reduce((acc: any, cur: any) => {
    return [...acc, ...cur.locations];
  }, stays);
};

const Map = ({ trip }: any) => {
  const markers = getMarkers(trip);
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ""}
      libraries={["marker"]}
    >
      <MapComponent
        mapId="24b31ffef1dd7117"
        className="w-full h-80 rounded-md"
        defaultCenter={{ lat: trip.lat, lng: trip.lng }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {markers.map((marker: any) => (
          <MapMarker marker={marker} key={marker.name} />
        ))}
      </MapComponent>
    </APIProvider>
  );
};

export default Map;
