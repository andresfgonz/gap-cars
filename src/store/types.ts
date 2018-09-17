import { Car } from './cars/cars.types';
import { CarDetailsModal } from '@store/car-details-modal/car-details-modal.types';

export type Cars = Car[];

export interface AppState {
  cars: Cars;
  isSideMenuVisible: boolean;
  selectedCars: Cars;
  isAddCarFormVisible: boolean;
  carDetailsModal: CarDetailsModal;
}
