import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../core/TextInput";

const SignUpForm = ({ closeModal }: any) => {
  const router = useRouter();

  const handleSubmit = () => {
    closeModal();
    router.push("/confirm-email");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
        passwordConfirmation: Yup.string().test(
          "passwords-match",
          "Passwords must match",
          function (value) {
            return this.parent.password === value;
          },
        ),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput label="name" name="name" type="text" placeholder="name" />
        <TextInput label="email" name="email" type="text" placeholder="email" />
        <TextInput
          label="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <TextInput
          label="confirm password"
          name="passwordConfirmation"
          type="password"
          placeholder="confirm password"
        />
        <button
          className="bg-kagu-green-500 text-white py-2 px-4 rounded-lg mr-4"
          type="submit"
        >
          Login
        </button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
