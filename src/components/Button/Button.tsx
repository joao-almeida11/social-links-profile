import React from "react";
import type { ReactNode } from "react";

const defaultFunc = () => {
  console.log("button clicked");
};

type ButtonOrLinkProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & (
  | ({
      href?: never;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      href: string;
    } & React.ReactElement<HTMLAnchorElement>)
);

export default function Button({
  children,
  onClick = defaultFunc,
  href = "https://github.com/joao-almeida11/social-links-profile", // just to go somewhere
  type = "button",
}: ButtonOrLinkProps) {
  // I'm checking with the href because someone might want to add an onClick to an <a>
  if (href) {
    return (
      <a href={href} className="text-preset-2-bold btn">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} className="text-preset-2-bold btn">
      {children}
    </button>
  );
}
