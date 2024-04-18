import { redirect } from "next/navigation";
import PlainTextInput from "../core/PlainTextInput";
import { login } from "@/app/lib/auth";

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await login(formData);
        redirect("/dashboard");
      }}
    >
      <PlainTextInput
        label="email"
        name="email"
        type="text"
        placeholder="email"
      />
      <PlainTextInput
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
    </form>
  );
};

export default LoginForm;
