import Link from "next/link";
import LoginForm from "../ui/components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col px-4 pt-4 max-w-sm mx-auto h-full-w-header">
      {" "}
      <h1 className="uppercase font-bold mb-8">Login</h1>
      <LoginForm />
      <p className="mt-8">
        Don&apos;t have an account?{" "}
        <Link className="text-kagu-green-600" href="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
