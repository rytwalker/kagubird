import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useField } from "formik";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function Select({
  label,
  layoutStyles,
  onChange,
  options,
  ...props
}: any) {
  const [field, meta] = useField(props);
  return (
    <div className={layoutStyles}>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <div className="relative w-full">
        <Listbox value={props.value} onChange={onChange} name={props.name}>
          <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-4 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm bg-gray-50">
            <span className="block truncate">
              {props.value || props.placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-72 w-full overflow-auto rounded-lg bg-white p-1 shadow-lg z-50">
              {options.map((option: any) => (
                <Listbox.Option
                  key={option.id}
                  value={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-kagu-green-100 text-kagu-green-800"
                        : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-kagu-green-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
