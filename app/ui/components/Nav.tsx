"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import LoginModal from "./LoginModal";

export default function Nav() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  function handleLogin() {
    setShowModal(false);
    router.push("/dashboard");
  }

  return (
    <nav className=" px-2 h-14 bg-gray-50 flex items-center justify-between">
      <div className="w-40">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="mr-2 text-xs font-bold  uppercase"
          href="/dashboard"
        >
          Login
        </button>
        <Link className="text-xs font-bold  uppercase" href="/dashboard">
          Dashboard
        </Link>
      </div>
      <LoginModal
        showModal={showModal}
        handleLogin={handleLogin}
        setShowModal={setShowModal}
      />
    </nav>
  );
}
