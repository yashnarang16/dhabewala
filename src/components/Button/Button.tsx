import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};
export const Button = ({
  children,
  className,
  type,
  onClick,
}: ButtonProps) => {
  const btnType = type !== null ? type : 'button';
  const classes = `${className} text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`;
  return (
    <button type={btnType} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
