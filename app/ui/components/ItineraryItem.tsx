import { Disclosure, Transition } from "@headlessui/react";
import { MapPinIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

export default function IntineraryItem({ itineraryItem }: any) {
  return (
    <Disclosure
      as="div"
      className="mb-4 px-4 py-2 rounded-md bg-gray-50 relative overflow-hidden shadow-md shadow-gray-100"
    >
      <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-kagu-green-500" />
      <Disclosure.Button className="flex justify-between w-full">
        <div className="flex flex-col min-h-16 items-start">
          <h3 className="font-extrabold uppercase">{itineraryItem.name}</h3>
          <p className="uppercase text-xs">Saturday April 20th 12pm</p>
          <p className="uppercase text-xs flex items-center mt-auto text-kagu-green-500">
            <MapPinIcon className="h-4 w-4 mr-1" />
            {itineraryItem.locations.length > 1
              ? "Mulitiple Locations"
              : itineraryItem.locations[0].address}
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
            {itineraryItem.locations.map((location: any) => (
              <li key={location.name} className="uppercase text-xs mb-4">
                <p>
                  {" "}
                  {location.name} -{location.address}{" "}
                </p>
                <p>
                  {" "}
                  <a
                    className="text-kagu-green-500 underline"
                    href="https://google.com"
                  >
                    website
                  </a>{" "}
                  - {location.phone}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="uppercase font-bold text-xs mb-1">Notes</h4>
          <p className="text-xs">{itineraryItem.notes}</p>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
