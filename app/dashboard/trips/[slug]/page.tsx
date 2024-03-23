"use client";
import ItineraryItem from "@/app/ui/components/ItineraryItem";
import Map from "@/app/ui/components/Map";
import { trip } from "@/test-data";

export default function Trip() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-kagu-green-500 text-center text-5xl uppercase font-extrabold">
          {trip.name}
        </h1>
        <div className="flex justify-between">
          <p>
            {trip.location.city}, {trip.location.state}
          </p>
          <p className="text-sm">April 19th - April 21st</p>
        </div>
      </div>
      <div className="h-80 bg-gray-100  rounded-md mb-6">
        <Map />
      </div>
      <h2 className="text-3xl mb-2 uppercase font-extrabold">Itinerary</h2>
      {trip.itineraryItems.map((item) => (
        <ItineraryItem itineraryItem={item} />
      ))}
      <h2 className="text-3xl mb-2 uppercase font-extrabold">Stay</h2>
      {trip.stays.map((stay) => (
        <div key={stay.id} className="py-4 px-2 bg-gray-50 rounded-md">
          <h4 className="uppercase font-bold text-xs mb-1">
            Airbnb Hosted by Jake
          </h4>
          <p className="text-xs">Check in after 3pm Friday April 19th</p>
          <p className="text-xs mb-4">Check out 12pm Sunday April 21st</p>
          <ul>
            <li className="uppercase text-xs">
              1234 1st Ave. Pittsbugh, PA 44444
            </li>
            <li className="uppercase text-xs">412-123-4556</li>
            <li className="text-kagu-green-500 text-xs mt-2">
              <a href="https://google.com">Airbnb Link</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
