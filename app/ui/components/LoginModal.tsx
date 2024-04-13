"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "../core/Modal";
import SignUpForm from "./SignUpForm";

export default function LoginModal({ showModal, closeModal }: any) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      title={isLogin ? "Login" : "Sign up"}
      description={isLogin ? "Log in to your account" : "Sign the f up"}
      showModal={showModal}
      closeModal={closeModal}
    >
      {isLogin ? (
        <>
          <LoginForm closeModal={closeModal} />
          <p className="mt-2">
            Don&apos;t have an account?{" "}
            <button
              className="text-kagu-green-600"
              type="button"
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm closeModal={closeModal} />
          <p className="mt-2">
            already have an account?{" "}
            <button
              className="text-kagu-green-600"
              type="button"
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
          </p>
        </>
      )}
    </Modal>
  );
}
