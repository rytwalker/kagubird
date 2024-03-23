import { Disclosure, Transition } from "@headlessui/react";

export default function IntineraryItem({ itineraryItem }: any) {
  return (
    <Disclosure as="div" className="mb-4 py-4 px-2 rounded-md bg-gray-50">
      <Disclosure.Button className="flex flex-col">
        <h3 className="font-extrabold uppercase">{itineraryItem.name}</h3>
        <p className="uppercase text-xs">Saturday April 20th 12pm</p>
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
                  <a className="text-kagu-green-500" href="https://google.com">
                    {location.name}.com
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
