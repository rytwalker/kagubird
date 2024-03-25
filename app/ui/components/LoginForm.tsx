import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../core/TextInput";

const LoginForm = ({ closeModal }: any) => {
  const router = useRouter();

  const handleSubmit = () => {
    closeModal();
    router.push("/dashboard");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextInput label="email" name="email" type="text" placeholder="email" />
        <TextInput
          label="password"
          name="password"
          type="password"
          placeholder="password"
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

export default LoginForm;
