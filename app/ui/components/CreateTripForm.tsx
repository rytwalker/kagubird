"use client";

import { Formik, Form } from "formik";
import TextInput from "../core/TextInput";
import Button from "../core/Button";
import DatePicker from "../core/DateInputs";
import PlacesAutocomplete from "../core/PlacesAutocomplete";
import { api } from "@/app/lib/api";
import { useRouter } from "next/navigation";

const findAddressComponent = (components: any, type: string) => {
  let foundComponent: any;
  components.forEach((component: any) => {
    if (component.types.includes(type)) {
      foundComponent = component;
    }
  });

  return foundComponent;
};

const CreateTripForm = ({ createdBy, token }: any) => {
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    const payload = {
      name: values.name,
      city: values.city,
      state_code: values.stateCode,
      google_place_id: values.googlePlaceId,
      lat: values.lat,
      lng: values.lng,
      start_date: values.startDate,
      end_date: values.endDate,
      created_by: values.createdBy,
    };

    console.log(payload);
    const { data, error } = await api("/v1/trips", {
      body: JSON.stringify(payload),
      method: "POST",
      headers: { Authorization: `Bearer ${values.token}` },
    });

    if (error) {
      console.log(error);
      return;
    }

    router.push(`/dashboard/trips/${data.trip.id}`);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        city: "",
        stateCode: "",
        lat: "",
        lng: "",
        googlePlaceId: "",
        startDate: "",
        endDate: "",
        createdBy,
        token,
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }: any) => {
        const handleSelect = async (location: any) => {
          console.log(location);
          const city = findAddressComponent(
            location.address_components,
            "locality",
          )?.short_name;
          const stateCode = findAddressComponent(
            location.address_components,
            "administrative_area_level_1",
          )?.short_name;
          setFieldValue("city", city);
          setFieldValue("stateCode", stateCode);
          setFieldValue("googlePlaceId", location.place_id);
          setFieldValue("lat", location.lat);
          setFieldValue("lng", location.lng);
        };

        console.log(values);
        return (
          <Form className="w-full px-8">
            <TextInput
              label="What's the occasion?"
              type="text"
              name="name"
              placeholder="name"
            />
            <div className="uppercase mb-1 text-xs font-semibold text-gray-400">
              Where are we going? (city + state)
            </div>
            {values.city ? (
              <div className="flex gap-4">
                <TextInput
                  layoutStyles="w-2/3"
                  type="text"
                  name="city"
                  placeholder="city"
                  disabled
                />
                <TextInput
                  name="stateCode"
                  type="text"
                  placeholder="state"
                  layoutStyles="w-1/3"
                  disabled
                />
              </div>
            ) : (
              <div className="mb-8">
                <PlacesAutocomplete handleSelect={handleSelect} />
              </div>
            )}
            <div className="flex gap-4">
              <DatePicker
                selected={values.startDate}
                onChange={(date: string) => setFieldValue("startDate", date)}
                label="Start Date"
                layoutStyles="w-1/2"
              />
              <DatePicker
                selected={values.endDate}
                onChange={(date: string) => setFieldValue("endDate", date)}
                label="End Date"
                layoutStyles="w-1/2"
              />
            </div>
            <Button fullWidth type="submit" intent="primary">
              Create a Trip
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateTripForm;
