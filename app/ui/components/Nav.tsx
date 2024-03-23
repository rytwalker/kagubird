import Link from "next/link";
import Logo from "./Logo";
export default function Nav() {
  return (
    <nav className=" px-2 h-14 bg-gray-50 flex items-center justify-between">
      <div className="w-40">
        <Logo />
      </div>
      <div>
        <Link className="text-xs font-bold  uppercase" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
