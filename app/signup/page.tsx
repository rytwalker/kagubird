import Link from "next/link";
import SignUpForm from "../ui/components/SignUpForm";

const Signup = () => {
  return (
    <div className="flex flex-col px-4 pt-4 max-w-sm mx-auto h-full-w-header">
      {" "}
      <h1 className="uppercase font-bold mb-8">Login</h1>
      <SignUpForm />
      <p className="mt-8">
        Already have an account?{" "}
        <Link className="text-kagu-green-600" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
