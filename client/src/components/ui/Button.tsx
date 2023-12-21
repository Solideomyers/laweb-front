import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ children, ...props }: Props, variant) => {
  const primary =
    "col-span-2 w-full justify-center rounded-full bg-primary px-3 py-1.5 text-sm font-semibold  leading-6 text-[#fff] uppercase shadow-sm hover:bg-blue-600 focus-visible:outline  focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-primary/90";

  return (
    <button className={primary} {...props}>
      {children}
    </button>
  );
};
