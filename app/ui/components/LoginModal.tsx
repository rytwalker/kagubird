"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function LoginModal({
  showModal = false,
  setShowModal,
  handleLogin,
}: any) {
  return (
    <Transition
      show={showModal}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog className="relative z-50" onClose={() => setShowModal(false)}>
        <div className="fixed inset-0 bg-black/25 opacity-100" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-md  transform rounded bg-white overflow-hidden shadow-xl p-6 text-left transition-all opacity-100 scale-100">
              <Dialog.Title className="font-bold text-xl uppercase">
                Login
              </Dialog.Title>
              <Dialog.Description className="mb-4">
                Log in to your account
              </Dialog.Description>

              <button
                className="bg-kagu-green-500 text-white py-2 px-4 rounded-lg mr-4"
                onClick={handleLogin}
              >
                Login
              </button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
