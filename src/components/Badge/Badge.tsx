import React from 'react';

type BadgeProps = { children: React.ReactNode; className: string };
export const Badge = ({ children, className }: BadgeProps) => {
  const classes = `${className} text-sm inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded`;
  return <span className={classes}>{children}</span>;
};
