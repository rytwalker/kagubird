"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY || ""}>
      {children}
    </APIProvider>
  );
}
