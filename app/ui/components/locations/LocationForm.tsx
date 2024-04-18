import { Fragment } from "react";
import { Form, Formik } from "formik";
import { Combobox, Transition } from "@headlessui/react";
import usePlacesAutocomplete, {
  getDetails,
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Button from "../../core/Button";
import { api } from "@/app/lib/api";
import { refreshTrip } from "@/app/lib/actions";

const setLocation = (googleLocation: any, setter: any) => {
  // set values in formik state
  setter("name", googleLocation.name);
  setter("address", googleLocation.formatted_address);
  setter("lat", googleLocation.lat);
  setter("lng", googleLocation.lng);
  setter("google_place_id", googleLocation.place_id);
  setter("website", googleLocation.website);
  setter("phone", googleLocation.international_phone_number);
  setter("formatted_phone_number", googleLocation.formatted_phone_number);
};

const handleSubmit = async (values: any) => {
  const { formatted_phone_number, ...payload } = values;

  const { data, error } = await api("/v1/locations", {
    body: JSON.stringify(payload),
    method: "POST",
  });
  console.log(data, error);
  await refreshTrip();
};

const LocationForm = ({ activityId, closeModal }: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ callbackName: "mapCallback" });

  const initialValues = {
    name: "",
    address: "",
    lat: "",
    lng: "",
    google_place_id: "",
    website: "",
    phone: "",
    formatted_phone_number: "",
    activity: activityId,
  };

  const onSubmit = async (values: any) => {
    await handleSubmit(values);
    closeModal();
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {({ values, setFieldValue }) => {
        const handleSelect = async (address: string) => {
          console.log(address);
          setValue(address, false);
          clearSuggestions();
          const results = await getGeocode({ address });
          const { lat, lng } = getLatLng(results[0]);
          const details = await getDetails({ placeId: results[0].place_id });
          console.log(details);
          setLocation({ ...(details as object), lat, lng }, setFieldValue);
        };

        return (
          <Form className="">
            <Combobox value={value} disabled={!ready} onChange={handleSelect}>
              <div className="relative mt-1">
                <div className="relative w-full verflow-hidden cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
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
                              active
                                ? "bg-kagu-green-300 text-white"
                                : "text-gray-900"
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
            {location && (
              <>
                <div className="my-4">
                  <div className="text-sm uppercase font-bold">
                    {values.name}
                  </div>
                  <div className="text-xs uppercase font-semibold">
                    {values.address}
                  </div>
                  <div className="text-xs uppercase font-semibold">
                    {values.website}
                  </div>
                  <div className="text-xs uppercase font-semibold">
                    {values.formatted_phone_number}
                  </div>
                </div>
                <Button type="submit" intent="primary" fullWidth>
                  Add Location
                </Button>
              </>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LocationForm;
