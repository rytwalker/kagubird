import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./lib/Providers";
import "./globals.css";
import Nav from "./ui/components/Nav";
import MobileNav from "./ui/components/MobileNav";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kagubird",
  description: "Have fun with friends",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <head></head>
      <body className="bg-white">
        <Nav />
        {props.children}
        <MobileNav />
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_API_KEY || ""}&libraries=places&callback=mapCallback`}
        ></script>
      </body>
    </html>
  );
}
