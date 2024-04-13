import Map from "@/app/ui/components/Map";
import { trip } from "@/test-data";
import Activities from "@/app/ui/components/activities/Activities";

async function getData(slug: string) {
  const res = await fetch(`http://localhost:4000/v1/trips/${slug}`, {
    next: { tags: ["trip"] },
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
  const data = await getData(params.slug);

  return (
    <>
      <div className="p-4 pb-mobile-nav-4">
        <div className="mb-6">
          <h1 className="text-kagu-green-500 text-center text-5xl uppercase font-extrabold">
            {trip.name}
          </h1>
          <div className="flex justify-between">
            <p>
              {trip.location.city}, {trip.location.state}
            </p>
            <p className="text-sm">April 19th - April 21st</p>
          </div>
        </div>
        <div className="h-80 bg-gray-100  rounded-md mb-6">
          <Map />
        </div>
        {/* Activities section */}
        <h2 className="text-3xl mb-2 uppercase font-extrabold">Itinerary</h2>
        <Activities activities={data.trip.activities} />

        <h2 className="text-3xl mb-2 uppercase font-extrabold">Stay</h2>
        {trip.stays.map((stay: any) => (
          <div
            key={stay.id}
            className="relative p-4 bg-gray-50 rounded-md overflow-hidden shadow-md shadow-gray-100"
          >
            <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-gray-200" />
            <h4 className="uppercase font-bold text-xs mb-1">
              Airbnb Hosted by Jake
            </h4>
            <p className="text-xs">Check in after 3pm Friday April 19th</p>
            <p className="text-xs mb-4">Check out 12pm Sunday April 21st</p>
            <ul>
              <li className="uppercase text-xs">
                1234 1st Ave. Pittsbugh, PA 44444
              </li>
              <li className="uppercase text-xs">412-123-4556</li>
              <li className="text-kagu-green-500 text-xs mt-2">
                <a href="https://google.com">Airbnb Link</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
