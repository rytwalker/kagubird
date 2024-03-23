import { Disclosure, Transition } from "@headlessui/react";

export default function IntineraryItem() {
  return (
    <Disclosure as="div" className="mb-4 py-4 px-2 rounded-md bg-gray-50">
      <Disclosure.Button className="flex flex-col">
        <h3 className="font-extrabold uppercase">Bar Crawl</h3>
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
            <li className="uppercase text-xs mb-4">
              The BeerHIVE - 123 PEnn. AVE PITTSBURGH PA, 44121{" "}
              <a className="text-kagu-green-500" href="https://google.com">
                BEERHIVE.com
              </a>{" "}
              - 412-555-1224
            </li>
            <li className="uppercase text-xs mb-4">
              The BeerHIVE - 123 PEnn. AVE PITTSBURGH PA, 44121{" "}
              <a className="text-kagu-green-500" href="https://google.com">
                BEERHIVE.com
              </a>{" "}
              - 412-555-1224
            </li>
          </ul>

          <h4 className="uppercase font-bold text-xs mb-1">Notes</h4>
          <p className="text-xs">Order isn't important. Bring cash.</p>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
