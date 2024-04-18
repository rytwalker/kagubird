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

const PlainTextInput = ({ label, layoutStyles, ...props }: any) => {
  const isError = false;
  const meta = {
    error: "something went wrong",
  };
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
      <input className={textInputStyles({ isError: !!isError })} {...props} />
      {isError ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PlainTextInput;
