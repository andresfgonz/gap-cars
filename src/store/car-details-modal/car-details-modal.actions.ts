import { ActionTypes } from '@store/action-types';
import { Car } from '@store/cars/cars.types';

const { SHOW, HIDE } = ActionTypes.CarDetailsModal;

export const showCarDetailsModal = (car: Car) => ({ type: SHOW, payload: car });
export const hideCarDetailsModal = () => ({ type: HIDE });
