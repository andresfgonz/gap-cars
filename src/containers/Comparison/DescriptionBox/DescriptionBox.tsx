import * as React from 'react';

import './DescriptionBox.scss';

interface ComponentProps {
  title: string;
  values: any[];
}

export const DescriptionBox: React.SFC<ComponentProps> = ({ title, values }) => {
  return (
    <div className="description-box">
      <div className="description-text description-title">
        {title}
      </div>
      {values.map((value, index) => (
        <div className="description-text" key={index}>{value}</div>
      ))}
    </div>
  );
};
