"use client";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../core/TextInput";
import { api } from "@/app/lib/api";
import { useState } from "react";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const { error } = await api("/v1/users", {
      body: JSON.stringify(payload),
      method: "POST",
    });
    if (error) {
      setError("Something went wrong. Please try again.");
      return;
    }

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
        {error ? (
          <p className="mb-8 py-2 px-4 bg-red-100 text-red-600 rounded-lg border border-red-300">
            {error}
          </p>
        ) : null}
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
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
