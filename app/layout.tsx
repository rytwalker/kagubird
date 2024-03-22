import Providers from "./Providers";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
