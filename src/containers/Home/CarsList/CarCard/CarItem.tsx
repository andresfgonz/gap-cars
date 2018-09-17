import * as React from 'react';

import { Card } from '@components/Card';

import { Car } from '@store/cars/cars.types';

import './CarItem.scss';

interface ComponentProps {
  car: Car;
  onClick: Function;
}

export const CarItem: React.SFC<ComponentProps> = (props) => {
  const { imageUrl, brand, model, name, price, year } = props.car;
  return (
    <Card>
      <div className="car-list-item" onClick={() => props.onClick()}>
        <div className="car-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="car-description">
          <h5 className="car-line">
            {brand} {model}
          </h5>
          <div className="car-name">
            {name}
          </div>
          <div className="car-year">
            {year}
          </div>
          <div className="car-price">
            {price}
          </div>
        </div>
      </div>
    </Card>
  );
};
