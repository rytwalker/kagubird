import Link from "next/link";
import { format } from "date-fns";
import { getSession } from "../lib/auth";
import { api } from "../lib/api";

export default async function Page() {
  const session = await getSession();
  if (!session) {
    return (
      <div>
        <p>
          You needed to be logged in to view this page.{" "}
          <Link href="/login">Login here.</Link>
        </p>
      </div>
    );
  }

  const { data, error } = await api("/v1/trips", {
    headers: { Authorization: `Bearer ${session.user.token}` },
  });

  // const trips = data.trips.filter((trip: any) => {
  //   return (
  //     trip.created_by === session.user.user_id ||
  //     (trip.tripgoers || []).find(({ id }: any) => id === session.user.user_id)
  //   );
  // });

  console.log(data, error);
  return (
    <div className="py-2 px-8">
      <nav className="mb-2">
        <Link className="text-xs font-bold uppercase" href="/dashboard/trips">
          Trips
        </Link>
      </nav>
      <h1 className="text-2xl font-bold uppercase mb-6">Welcome!</h1>
      <h2 className="font-bold uppercase mb-2 font-sm">Upcoming Trips</h2>
      {error ? (
        <div>somethign went wrong</div>
      ) : (
        data.trips.map((trip: any) => (
          <Link key={trip.id} href={`/dashboard/trips/${trip.id}`}>
            <div className="mb-8 px-4 py-2 rounded-md bg-gray-50 relative overflow-hidden shadow-md shadow-gray-100">
              <h3 className="font-extrabold uppercase">{trip.name}</h3>
              <p className="uppercase text-xs">
                {format(trip.start_date, "MM-dd-yyyy")} -{" "}
                {format(trip.end_date, "MM-dd-yyyy")}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
