"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import LogoMain from "../../../public/logo.svg";
import LogoInverse from "../../../public/logo-inverse.svg";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  return (
    <Image
      alt="Kagubird logo"
      height="106"
      width="566"
      src={resolvedTheme === "dark" ? LogoInverse : LogoMain}
      className="w-100%"
    />
  );
}
