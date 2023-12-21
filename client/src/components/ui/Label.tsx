import React from "react";
interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = ({ children, ...props }: Props) => {
  return (
    <label
      className="block text-sm uppercase  font-medium leading-6 text-gray-900"
      {...props}
    >
      {children}
    </label>
  );
};
