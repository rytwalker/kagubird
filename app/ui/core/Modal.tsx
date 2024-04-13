"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Modal({
  title,
  description,
  children,
  showModal,
  closeModal,
}: any) {
  return (
    <Transition show={showModal} as={Fragment} appear>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="duration-300 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md  transform rounded-lg bg-white shadow-xl p-6 text-left transition-all opacity-100 scale-100">
                <Dialog.Title className="font-bold text-xl uppercase">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="mb-4">
                  {description}
                </Dialog.Description>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
