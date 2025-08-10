import type { ReactNode, MouseEventHandler } from "react";

const defaultFunc = () => {
  console.log("button clicked");
};

type ButtonProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonOrLinkProps = ButtonProps | AnchorProps;

export default function Button(props: ButtonOrLinkProps) {
  // I'm checking with the href because someone might want to add an onClick to an <a>
  if (props?.href) {
    const { children, href } = props;

    return (
      <a href={href} className="text-preset-2-bold btn">
        {children}
      </a>
    );
  }

  const {
    children,
    onClick = defaultFunc,
    type = "button",
  } = props as ButtonProps;

  return (
    <button onClick={onClick} type={type} className="text-preset-2-bold btn">
      {children}
    </button>
  );
}
