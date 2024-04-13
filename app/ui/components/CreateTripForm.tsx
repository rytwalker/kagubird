import { Formik, Form } from "formik";
import TextInput from "../core/TextInput";
import Select from "../core/Select";
import Button from "../core/Button";
import DatePicker from "../core/DateInputs";
import { statecodeSelect } from "@/app/lib/locationHelpers";

const options = statecodeSelect();

const CreateTripForm = ({ handleSubmit }: any) => {
  return (
    <Formik
      initialValues={{
        name: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form className="w-full">
            <TextInput
              label="What's the occasion?"
              type="text"
              name="name"
              placeholder="name"
            />
            <div className="uppercase mb-1 text-xs font-semibold text-gray-400">
              Where are we going?
            </div>
            <div className="flex gap-4">
              <TextInput
                layoutStyles="w-2/3"
                type="text"
                name="city"
                placeholder="city"
                noLabel
              />
              <Select
                options={options}
                value={values.state}
                onChange={(value: string) => setFieldValue("state", value)}
                name="state"
                placeholder="state"
                layoutStyles="w-1/3"
              />
            </div>
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
