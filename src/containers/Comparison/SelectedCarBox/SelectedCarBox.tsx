import * as React from 'react';
import { FaTimes } from 'react-icons/fa';

import { Car } from '@store/cars/cars.types';

import './SelectedCarBox.scss';

interface ComponentProps {
  car: Car;
  removeCar: Function;
}

export const SelectedCarBox: React.SFC<ComponentProps> = ({ car, removeCar }) => {
  const { brand, imageUrl, model, name } = car;
  return (
    <div className="selected-car-box">
      <div className="car-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
      <div className="car-description">
        {brand} {model} {name}
      </div>
      <div className="remove-car-button" onClick={() => removeCar()}>
        <FaTimes className="remove-button-icon"/>
        Remove
      </div>
    </div>
  );
};
