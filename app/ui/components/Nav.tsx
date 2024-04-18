import Link from "next/link";
import Logo from "./Logo";
import { logout } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Nav({ session }: any) {
  return (
    <nav className=" px-2 h-14 bg-gray-50 flex items-center justify-between">
      <div className="w-40">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        {session ? (
          <div className="flex items-center">
            <Link
              className="text-xs font-bold uppercase mr-4"
              href="/dashboard"
            >
              Dashboard
            </Link>
            <form
              className="flex items-center"
              action={async () => {
                "use server";
                await logout();
                redirect("/");
              }}
            >
              <button className="text-xs font-bold uppercase" type="submit">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <>
            <Link className="text-xs font-bold  uppercase mr-4" href="/login">
              Login
            </Link>
            <Link className="text-xs font-bold  uppercase mr-4" href="/signup">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
