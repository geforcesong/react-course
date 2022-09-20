import React from 'react';

type IconColor = 'Red' | 'Blue' | Omit<string, 'Blue' | 'Red'>;

interface IconProps {
  color: IconColor;
}

export const Icon = (props: IconProps) => {
  return <div>{props.color}</div>;
};

export const TestComponent = () => {
  return (
    <>
      <Icon color='#BBFFCC' />
      <Icon color='Red' />
      <Icon color='' />
    </>
  );
};
