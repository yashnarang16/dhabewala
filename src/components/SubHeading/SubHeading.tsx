import React from 'react';

type childernProviderProps = { children: React.ReactNode; className?: string };
export const SubHeading = ({ children, className }: childernProviderProps) => {
  const existingClass =
    'text-4xl font-normal leading-normal mt-0 mb-2 pl-2 text-slate-800';
  const classes =
    className !== undefined ? `${className} ${existingClass}` : existingClass;
  return <h2 className={classes}>{children}</h2>;
};
