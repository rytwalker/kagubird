import { getSession } from "@/app/lib/auth";
import Map from "@/app/ui/components/Map";
import Activities from "@/app/ui/components/activities/Activities";
import Stays from "@/app/ui/components/stays/Stays";
import TripGoers from "@/app/ui/components/tripgoers/TripGoers";
import { format } from "date-fns";
import { redirect } from "next/navigation";

async function getData(slug: string, token: string) {
  const res = await fetch(`http://localhost:4000/v1/trips/${slug}`, {
    next: { tags: ["trip"] },
    headers: { Authorization: `Bearer ${token}` },
  });
  //   // You can return Date, Map, Set, etc.
  if (!res.ok) {
    console.log(res.status);
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Trip({ params }: { params: { slug: string } }) {
  // 1. get session
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  // 2. get trip (add to api some kind of thing)
  const data = await getData(params.slug, session.user.token);
  const trip = data.trip;
  const allowEdits = trip.created_by === session.user.user_id;
  const tripgoer =
    allowEdits ||
    trip.tripgoers.find(({ id }: any) => id === session.user.user_id);
  if (!tripgoer) {
    redirect("/dashboard");
  }
  console.log(trip);

  return (
    <>
      <div className="p-4 pb-mobile-nav-4">
        <div className="mb-6">
          <h1 className="text-kagu-green-500 text-center text-5xl uppercase font-extrabold">
            {trip.name}
          </h1>
          <div className="flex justify-between">
            <p>
              {trip.city}, {trip.state_code}
            </p>
            <p className="text-sm">
              {format(trip.start_date, "MMMM/dd/yy")} -{" "}
              {format(trip.end_date, "MMMM/dd/yy")}
            </p>
          </div>
        </div>
        <div className="h-80 bg-gray-100  rounded-md mb-6">
          <Map trip={trip} />
        </div>
        {/* Activities section */}
        <h2 className="text-3xl mb-2 uppercase font-extrabold">Itinerary</h2>
        <Activities
          activities={data.trip.activities}
          allowEdits={allowEdits}
          tripId={trip.id}
        />

        <h2 className="text-3xl mb-2 uppercase font-extrabold">Stay</h2>
        <Stays
          stays={trip.stays || []}
          allowEdits={allowEdits}
          tripId={trip.id}
        />
        <TripGoers
          allowEdits={allowEdits}
          tripId={trip.id}
          token={session.user.token}
          tripgoers={trip.tripgoers || []}
        />
      </div>
    </>
  );
}
