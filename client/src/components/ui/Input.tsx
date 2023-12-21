import React from "react";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = (props: Props) => {
  return (
    <input
      className="col-span-3 bg-red-500 px-3 outline-none rounded-s-full"
      {...props}
    />
  );
};
