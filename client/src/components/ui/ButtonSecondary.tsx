import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const ButtonSecondary = ({ children, ...props }: Props) => {
  const primary =
    "relative w-full px-8 py-2 rounded-full bg-white text-primary font-semibold isolation-auto z-10 border-2 border-primary before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700";

  return (
    <button className={primary} {...props}>
      {children}
    </button>
  );
};
