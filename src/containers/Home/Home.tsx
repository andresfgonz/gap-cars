import * as React from 'react';
import { CarsList } from './CarsList';
import { FilterBox } from './FilterBox';

import './Home.scss';
import CarDetailsModal from './CarDetailsModal/CarDetailsModal';

export const Home: React.SFC = () => {
  return (
    <div className="home-container">
      <FilterBox/>
      <CarsList />
      <CarDetailsModal/>
    </div>
  );
};
