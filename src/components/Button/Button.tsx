import React from "react";

type ButtonProps = Readonly<
  {
    variant?: "primary" | "secondary";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export default function Button({
  children,
  type = "button",
}: ButtonProps): React.ReactElement<HTMLButtonElement> {
  return (
    <button type={type} className="text-preset-2-bold btn">
      {children}
    </button>
  );
}
