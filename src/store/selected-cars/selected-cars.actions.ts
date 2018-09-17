import { ActionTypes } from '@store/action-types';
import { Car } from '@store/cars/cars.types';

const { ADD_CAR, REMOVE_CAR } = ActionTypes.SelectedCarsActions;

export const addSelectedCar = (car: Car) => ({ type: ADD_CAR, payload: car });
export const removeCar = (carName: string) => ({ type: REMOVE_CAR, payload: carName });
