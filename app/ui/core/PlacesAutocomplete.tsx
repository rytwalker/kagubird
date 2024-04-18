import { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getDetails,
} from "use-places-autocomplete";

export default function PlacesAutocomplete({ handleSelect }: any) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete({ callbackName: "mapCallback" });

  async function onChange(address: string) {
    setValue(address);
    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    const details = await getDetails({ placeId: results[0].place_id });
    const location = { ...(details as object), lat, lng };
    handleSelect(location);
  }

  return (
    <Combobox value={value} disabled={!ready} onChange={onChange}>
      <div className="relative mt-1">
        <div className="relative w-full verflow-hidden cursor-default rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="pl-4 pr-10 text-sm text-gray-900 w-full py-2 bg-gray-50 border-2 border-gray-50 rounded-lg appearance-none leading-tight focus:outline-none  focus:bg-white focus:border-kagu-green-500"
            onChange={(e) => setValue(e.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setValue("")}
        >
          <Combobox.Options className="absolute mt-1 w-full z-50 min-h-40  rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <Combobox.Option
                  key={place_id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-kagu-green-300 text-white" : "text-gray-900"
                    }`
                  }
                  value={description}
                >
                  <span className="block truncate">{description}</span>
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
