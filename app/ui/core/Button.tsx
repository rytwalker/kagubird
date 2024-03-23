import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-brand text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
  },
);

interface Props extends VariantProps<typeof buttonStyles> {}

export default function Button({
  intent,
  fullWidth,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button className={buttonStyles({ intent, fullWidth })}>{children}</button>
  );
}
