import { Location as LocationType } from "@/app/lib/definitions";

const Location = ({ location }: { location: LocationType }) => {
  return (
    <li key={location.name} className="uppercase text-xs mb-4">
      <p>
        {" "}
        {location.name} -{location.address}{" "}
      </p>
      <p>
        {" "}
        <a className="text-kagu-green-500 underline" href="https://google.com">
          website
        </a>{" "}
        {location.phone ? <span> - {location.phone}</span> : null}
      </p>
    </li>
  );
};

export default Location;
