import { Formik, Form } from "formik";

import TextInput from "../../core/TextInput";
import Button from "../../core/Button";
import { api } from "@/app/lib/api";
import { refreshTrip } from "@/app/lib/actions";

const handleSubmit = async (values: any) => {
  const payload = {
    email: values.email,
    trip: values.tripId,
  };
  console.log(payload);
  const { data, error } = await api("/v1/tripgoers", {
    body: JSON.stringify(payload),
    method: "POST",
    headers: { Authorization: `Bearer ${values.token}` },
  });
  console.log(data, error);
  await refreshTrip();
};

const CreateTripGoerForm = ({ tripId, token, closeModal }: any) => {
  const onSubmit = async (values: any) => {
    await handleSubmit(values);
    closeModal();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        tripId,
        token,
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <TextInput
              label="Who's coming?"
              type="email"
              name="email"
              placeholder="Add by email"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              intent="primary"
            >
              {isSubmitting ? "Adding Trip Goer..." : "Add Trip Goer"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateTripGoerForm;
