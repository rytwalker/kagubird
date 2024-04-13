import { useField } from "formik";
import { cva } from "class-variance-authority";

export const textInputStyles = cva(
  "w-full py-2 px-4 bg-gray-50 border-2 border-gray-50 shadow-sm  rounded-lg appearance-none leading-tight focus:outline-none  focus:bg-white focus:border-kagu-green-500",
  {
    variants: {
      isError: {
        true: "bg-white border-red-500 focus:border-red-500",
      },
    },
  },
);

export default function TextInput({ label, layoutStyles, ...props }: any) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <div className={`flex flex-col mb-8 ${layoutStyles}`}>
      {!!label && (
        <label
          className="text-xs mb-1 font-semibold uppercase text-gray-400"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      )}
      <input
        className={textInputStyles({ isError: !!isError })}
        {...field}
        {...props}
      />
      {isError ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
}
