"use client";

import { useState } from "react";
import { format } from "date-fns";

import { Disclosure, Transition } from "@headlessui/react";
import { MapPinIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/app/ui/core/Button";
import Modal from "@/app/ui/core/Modal";
import LocationForm from "../locations/LocationForm";
import { Location as LocationType } from "@/app/lib/definitions";
import Location from "../locations/Location";

export default function Activity({ activity, allowEdits }: any) {
  const [showLocationModal, setShowLocationModal] = useState(false);

  let locationText;
  if (activity.locations?.length == 0) {
    locationText = "Add a location";
  } else if (activity.locations.length > 1) {
    locationText = "Multiple Locations";
  } else {
    locationText = activity.locations[0].address;
  }

  const startDate =
    format(activity.start_time, "iiii MMMM do") +
    format(activity.start_time, " h:mmaaa");
  const endDate =
    format(activity.start_time, "iiii MMMM do") ===
    format(activity.end_time, "iiii MMMM do")
      ? format(activity.end_time, "h:mmaaa")
      : format(activity.end_time, "iiii MMMM do h:mmaaa");
  return (
    <>
      <Modal
        title="Add a location"
        description="Activities should have at least one location"
        showModal={showLocationModal}
        closeModal={() => setShowLocationModal(false)}
      >
        <LocationForm
          activityId={activity.id}
          closeModal={() => setShowLocationModal(false)}
        />
      </Modal>
      <Disclosure
        as="div"
        className="mb-4 px-4 py-2 rounded-md bg-gray-50 relative overflow-hidden shadow-md shadow-gray-100"
      >
        <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-kagu-green-500" />
        <Disclosure.Button className="flex justify-between w-full">
          <div className="flex flex-col min-h-16 items-start">
            <h3 className="font-extrabold uppercase">{activity.name}</h3>
            <p className="uppercase text-xs text-left">
              {startDate} - {endDate}
            </p>
            <p className="uppercase text-xs flex items-center mt-auto text-kagu-green-500">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {locationText}
            </p>
          </div>
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-700">
            <div className="my-4 h-px bg-gray-200" />
            <h4 className="uppercase font-bold text-xs mb-1">Locations</h4>
            <ul>
              {activity.locations.map((location: LocationType) => (
                <Location location={location} key={location.id} />
              ))}
            </ul>
            {allowEdits ? (
              <div className="mb-4">
                <Button
                  intent="flat"
                  type="button"
                  size="sm"
                  onClick={() => setShowLocationModal(true)}
                >
                  <PlusCircleIcon className="w-4 h-4 mr-1" /> Location
                </Button>
              </div>
            ) : null}
            <h4 className="uppercase font-bold text-xs mb-1">Notes</h4>
            <p className="text-xs">{activity.notes}</p>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </>
  );
}
