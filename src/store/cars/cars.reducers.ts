import { Car } from './cars.types';
import { Reducer } from 'redux';

import { mockCarsData } from './mock-cars-data';
import { ActionTypes } from '../action-types';

const {
  CLEAR,
  FILTER,
  SORT,
} = ActionTypes.CarActions;

export const cars: Reducer<Car[]> = (state = mockCarsData, action) => {
  switch (action.type) {
    case FILTER:
      const regex = new RegExp(`.*${action.payload}.*`, 'i');
      return [...mockCarsData.filter(car => car.brand.match(regex))];
    default:
      return state;
  }
};
