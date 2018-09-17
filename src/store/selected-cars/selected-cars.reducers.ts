import { ActionTypes } from '@store/action-types';
import { Car } from '@store/cars/cars.types';
import { Reducer } from 'redux';
import { Cars } from '@store/types';

const { ADD_CAR, REMOVE_CAR } = ActionTypes.SelectedCarsActions;

const initialState: Cars = [];

export const selectedCars: Reducer<Car[]> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      let newState: Car[];
      if (state.length < 3) newState = [...state, action.payload];
      else newState = state;
      return newState;
    case REMOVE_CAR:
      const index = state.findIndex(car => car.name === action.payload);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
};
