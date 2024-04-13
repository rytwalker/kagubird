"use server";
import { revalidateTag } from "next/cache";

export const refreshTrip = async () => {
  revalidateTag("trip");
};
