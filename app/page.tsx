import Logo from "@ui/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-2 flex flex-col items-center justify-center h-full-w-header">
      <Logo />
      <h1 className="text-3xl font-bold">Get started!</h1>
      <div>
        <Link href="/login"> Login</Link> |<Link href="/signup"> Sign up</Link>
      </div>
    </div>
  );
}
