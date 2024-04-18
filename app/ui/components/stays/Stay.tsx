export default function Stay({ stay }: any) {
  return (
    <div className="mb-4 relative p-4 bg-gray-50 rounded-md overflow-hidden shadow-md shadow-gray-100">
      <div className="absolute w-1.5 top-0 bottom-0 left-0 bg-gray-200" />
      <h4 className="uppercase font-bold text-xs mb-1">{stay.name}</h4>
      <p className="text-xs">Check in after 3pm Friday April 19th</p>
      <p className="text-xs mb-4">Check out 12pm Sunday April 21st</p>
      <ul>
        <li className="uppercase text-xs">{stay.address}</li>
        {stay.phone ? (
          <li className="uppercase text-xs">{stay.phone}</li>
        ) : null}
        {stay.link ? (
          <li className="text-kagu-green-500 text-xs mt-2">
            <a href={`${stay.link}`}>{stay.type || ""} Link</a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
