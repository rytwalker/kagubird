import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof buttonStyles>;
export type ButtonProps = ComponentProps<"button"> & ButtonVariants;

const buttonStyles = cva(
  "flex items-center justify-center rounded-lg font-medium drop-shadow-sm focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-brand text-white px-4 py-3",
        flat: "bg-transparent text-gray-400 px-0 py-0",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        sm: "text-xs",
      },
    },
  },
);

export default function Button({
  intent,
  fullWidth,
  size,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={buttonStyles({ intent, fullWidth, size })}
    >
      {children}
    </button>
  );
}
