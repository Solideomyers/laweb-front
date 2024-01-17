import React from 'react';

// aqui debemos colocar todas las variantes que hemos definido
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'heroprimary' | 'herosecondary';
}
// aqui podemos definir todas las variantes que consideremos necesarias
const buttonStyles: Record<ButtonProps['variant'], string> = {
  primary:
    'flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/90 shadow-sm hover:shadow-black/60 rounded-full transition-all duration-100 delay-100 ease-in-out w-full items-center justify-center',
  secondary:
    'flex text-primary bg-white border border-primary py-2 px-6 focus:outline-none hover:bg-primary/10 transition-colors duration-100 delay-100 ease-linear rounded-full items-center justify-center',
  heroprimary:
    'w-1/4 text-center justify-center flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/90 shadow-sm hover:shadow-black/60 rounded-full transition-all duration-100 delay-100 ease-in-out',
  herosecondary:
    'w-1/4 text-center justify-center flex text-primary bg-white border-2 border-primary py-2 px-6 focus:outline-none hover:bg-neutral-100 hover:font-bold shadow-sm hover:shadow-black/60 rounded-full transition-all duration-100 delay-100 ease-in-out',
};

const getButtonStyles = (
  variant: ButtonProps['variant'] = 'primary'
): string => {
  return buttonStyles[variant] || '';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const buttonStyle = getButtonStyles(variant);

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};
