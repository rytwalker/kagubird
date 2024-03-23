import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={montserrat.className}>
      <body>{props.children}</body>
    </html>
  );
}
