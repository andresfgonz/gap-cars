import * as React from 'react';
import './Button.scss';

interface ComponentProps {
  icon: React.ReactNode;
  text: string;
}

export const Button: React.SFC<ComponentProps> = ({ icon, text }) => {
  return (
    <button className="app-button">
      {text} {icon}
    </button>
  );
};
