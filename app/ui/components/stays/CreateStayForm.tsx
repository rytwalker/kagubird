import { Formik, Form } from "formik";

import { formatISO } from "date-fns";
import TextInput from "../../core/TextInput";
import Button from "../../core/Button";
import DatePicker from "../../core/DateInputs";
import { api } from "@/app/lib/api";
import { refreshTrip } from "@/app/lib/actions";
import PlacesAutocomplete from "../../core/PlacesAutocomplete";

const handleSubmit = async (values: any) => {
  const startTime =
    formatISO(values.startDate, { representation: "date" }) +
    "T" +
    formatISO(values.startTime, { representation: "time" });

  const endTime =
    formatISO(values.endDate, { representation: "date" }) +
    "T" +
    formatISO(values.endTime, { representation: "time" });

  const payload = {
    name: values.name,
    start_time: startTime,
    end_time: endTime,
    type: values.type,
    link: values.link,
    phone: values.phone,
    address: values.address,
    lat: values.lat,
    lng: values.lng,
    trip: values.tripId,
  };
  console.log(payload);
  const { data, error } = await api("/v1/stays", {
    body: JSON.stringify(payload),
    method: "POST",
  });
  console.log(data, error);
  await refreshTrip();
};

const CreateStayForm = ({ tripId, closeModal }: any) => {
  const onSubmit = async (values: any) => {
    await handleSubmit(values);
    closeModal();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        address: "",
        lat: "",
        lng: "",
        link: "",
        phone: "",
        type: "",
        tripId,
      }}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        const handleSelect = async (location: any) => {
          console.log(location);
          setFieldValue("address", location.formatted_address);
          setFieldValue("lat", location.lat);
          setFieldValue("lng", location.lng);
        };

        const resetLocation = () => {
          setFieldValue("address", "");
          setFieldValue("lat", "");
          setFieldValue("lng", "");
        };

        return (
          <Form>
            <TextInput
              label="Where are we staying?"
              type="text"
              name="name"
              placeholder="Stay name"
            />
            <div className="uppercase mb-1 font-semibold text-xs text-gray-400">
              Address?
            </div>
            {values.address ? (
              <div className="flex items-center">
                <span>{values.address}</span>
                <button onClick={resetLocation} type="button">
                  x
                </button>
              </div>
            ) : (
              <PlacesAutocomplete handleSelect={handleSelect} />
            )}
            <div className="uppercase mt-8 mb-1 font-semibold text-xs text-gray-400">
              When does it start?
            </div>
            <div className="flex gap-4">
              <DatePicker
                selected={values.startDate}
                onChange={(date: string) => setFieldValue("startDate", date)}
                layoutStyles="w-2/3"
              />
              <DatePicker
                selected={values.startTime}
                onChange={(date: string) => setFieldValue("startTime", date)}
                isTimePicker
                layoutStyles="w-1/3"
              />
            </div>
            <div className="uppercase mb-1 font-semibold text-xs text-gray-400">
              When does it end?
            </div>
            <div className="flex gap-4">
              <DatePicker
                selected={values.endDate}
                onChange={(date: string) => setFieldValue("endDate", date)}
                layoutStyles="w-2/3"
              />
              <DatePicker
                selected={values.endTime}
                onChange={(date: string) => setFieldValue("endTime", date)}
                isTimePicker
                layoutStyles="w-1/3"
              />
            </div>
            <TextInput
              label="Link"
              type="text"
              name="link"
              placeholder="Link"
            />
            <TextInput
              label="Phone number"
              type="text"
              name="phone"
              placeholder="Phone"
            />
            <TextInput
              label="What is it? (airbnb, hotel)"
              type="text"
              name="type"
              placeholder="Type"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              intent="primary"
            >
              {isSubmitting ? "Adding Stay..." : "Add Stay"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateStayForm;
