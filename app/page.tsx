import Image from "next/image";
import Logo from "../public/logo.svg";

export default function Home() {
  return (
    <div className="px-2 flex flex-col items-center justify-center h-screen">
      <Image
        alt="Kagubird logo"
        height="106"
        width="566"
        src={Logo}
        className="w-100%"
      />
      <h1 className="text-3xl font-bold">Coming Soon!</h1>
    </div>
  );
}
