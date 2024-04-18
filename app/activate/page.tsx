"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "../lib/api";
import Link from "next/link";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const token = searchParams.get("token");
  useEffect(() => {
    (async () => {
      if (!token) {
        setIsError(true);
        return;
      }
      if (isSuccess) return;

      try {
        const { data, error } = await api("/v1/users/activated", {
          body: JSON.stringify({ token }),
          method: "PUT",
        });
        console.log(data, error);

        if (error) {
          setIsError(true);
        }

        if (data) {
          setIsSuccess(true);
        }
      } catch (error) {
        setIsError(true);
      }
    })();
  }, [token, isSuccess]);

  if (isSuccess) {
    return (
      <div>
        Your account has been activated!{" "}
        <Link href="/login" className="text-kagu-green-600">
          Login
        </Link>
      </div>
    );
  }

  if (isError) {
    return <div>There was a problem and your account was not activated</div>;
  }

  return <div>One sec...</div>;
}
