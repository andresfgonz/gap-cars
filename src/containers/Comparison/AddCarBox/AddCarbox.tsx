import * as React from 'react';

import { AddCarForm } from './AddCarForm';

import './AddCarBox.scss';

interface ComponentProps {
  onClick: Function;
  showAddCarForm: boolean;
}

export const AddCarBox: React.SFC<ComponentProps> = ({ onClick, showAddCarForm }) => {
  return (
    <div
      className={`add-car-box ${!showAddCarForm && 'hover-box'}`}
      onClick={() => onClick()}
    >
      <div className="car-image" />
      <h5 className="car-text">Add Car</h5>
      {showAddCarForm &&
      <AddCarForm />
      }
    </div>
  );
};
