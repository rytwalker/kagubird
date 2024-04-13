"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/app/ui/core/Button";
import CreateTripForm from "@/app/ui/components/CreateTripForm";
import CreateItineraryItemForm from "@/app/ui/components/CreateItineraryItemForm";

const initialValues = {
  name: "",
  startDate: "",
  endDate: "",
  itineraryItem: {
    name: "",
    locations: [],
  },
  location: {
    name: "",
  },
  itineraryItems: [],
  stays: [],
};

const addLocation = (arrayHelpers, location, setFieldValue) => {
  arrayHelpers.push(location);

  setFieldValue("location", { name: "" });
};

const addItineraryItem = (arrayHelpers, itineraryItem, setFieldValue) => {
  arrayHelpers.push(itineraryItem);
  // reset item

  setFieldValue("itineraryItem", { name: "", locations: [] });
  setFieldValue("location", { name: "" });
};

export default function NewTrip() {
  const router = useRouter();
  const places = useMapsLibrary("places");
  const [isTripInit, setIsTripInit] = useState(false);
  const [showItineraryForm, setShowItineraryForm] = useState(false);
  const [trip, setTrip] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    // 1. geolocate city, state to get coordinates and google place id (i guess)
    // 2. maybe format date to account for time zone?
    // 3. POST to api
    // 4. GET trip from response and set it in local state
    router.push("/dashboard/trips/1");
    setTrip({
      id: 1,
      name: "Ryan's Bday",
      city: "Pittsburgh",
      stateCode: "PA",
      startDate: "04/19/2024",
      endDate: "04/19/2024",
    });
    setIsTripInit(true);
  };

  const headlineText = trip ? "Add some activities " : "Let's go somewhere!";
  const subText = trip
    ? "Each activity should have at least one location "
    : "What are the big picture plans?";

  return (
    <div className="pb-mobile-nav-4">
      <div className="bg-gray-50 px-6 py-4 pb-8 mb-4 text-center drop-shadow-sm rounded-b-full">
        <h3 className="text-black font-bold text-lg">{headlineText}</h3>
        <p className="text-sm">{subText}</p>
      </div>
      <div className="p-6">
        {trip ? (
          <div>
            <ul>
              <li>{trip.name}</li>
              <li>{trip.city}</li>
              <li>{trip.stateCode}</li>
              <li>{trip.startDate}</li>
              <li>{trip.endDate}</li>
            </ul>
            {isTripInit ? (
              <Button
                intent="flat"
                type="button"
                onClick={() => setShowItineraryForm(true)}
              >
                <PlusCircleIcon className="w-6 h-6 mr-1" /> Itinerary Item
              </Button>
            ) : null}

            {isTripInit && showItineraryForm ? (
              <>
                <CreateItineraryItemForm />
                {/* <div className="p-2">{places && <LocationForm />}</div> */}
              </>
            ) : null}
          </div>
        ) : (
          <CreateTripForm handleSubmit={handleSubmit} isTripInit={isTripInit} />
        )}
      </div>
    </div>
  );
}
