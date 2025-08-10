import React from "react";

type ButtonProps = Readonly<
  {
    variant?: "primary" | "secondary";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export default function Button({
  children,
  type = "button",
  variant = "primary",
}: ButtonProps): React.ReactElement<HTMLButtonElement> {
  let clName = "text-preset-2-bold btn";
  if (variant === "primary") clName += " btn-primary";
  else clName += " btn-secondary";

  return (
    <button type={type} className={clName}>
      {children}
    </button>
  );
}
