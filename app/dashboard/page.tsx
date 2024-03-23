import Link from "next/link";

export default function Page() {
  return (
    <div className="p-2">
      <nav className="mb-2">
        <Link className="text-xs font-bold uppercase" href="/dashboard/trips">
          Trips
        </Link>
      </nav>
      <h1 className="text-2xl font-bold uppercase mb-6">Welcome Ryan</h1>
      <h2 className="font-bold uppercase mb-2 font-sm">Upcoming Trips</h2>
      <Link href="/dashboard/trips/1">
        <div className="bg-gray-50 rounded flex flex-col justify-center px-2 py-4">
          <h3 className="font-extrabold uppercase">Ryan's Bday</h3>
          <p className="uppercase text-xs">April 19th - April 21st</p>
        </div>
      </Link>
    </div>
  );
}
