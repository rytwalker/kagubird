import { Formik, Form } from "formik";

import { formatISO } from "date-fns";
import TextInput from "../../core/TextInput";
import Button from "../../core/Button";
import DatePicker from "../../core/DateInputs";
import { api } from "@/app/lib/api";
import { refreshTrip } from "@/app/lib/actions";

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
    notes: values.notes,
    start_time: startTime,
    end_time: endTime,
    trip: 1,
  };
  console.log(payload);
  const { data, error } = await api("/v1/activities", {
    body: JSON.stringify(payload),
    method: "POST",
  });
  console.log(data, error);
  await refreshTrip();
};

const CreateActivityForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        notes: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, setFieldValue }) => {
        console.log(isSubmitting);
        return (
          <Form>
            <TextInput
              label="What are we doing?"
              type="text"
              name="name"
              placeholder="Activity name"
            />
            <div className="uppercase mb-1 font-semibold text-xs text-gray-400">
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
              label="Any notes?"
              type="text"
              name="notes"
              placeholder="Notes"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              intent="primary"
            >
              {isSubmitting ? "Adding Activity..." : "Add Activity"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateActivityForm;
