import * as React from 'react';
import './Card.scss';

export const Card: React.SFC = props => (
  <div className="card-container">
    {props.children}
  </div>
);
