import { cars } from './cars/cars.reducers';
import { isSideMenuVisible } from './side-menu/side-menu.reducers';
import { selectedCars } from './selected-cars/selected-cars.reducers';
import { isAddCarFormVisible } from './add-car-form/add-car-form.reducer';
import { carDetailsModal } from './car-details-modal/car-details-modal.reducer';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';

export const reducers = combineReducers({
  cars,
  isSideMenuVisible,
  selectedCars,
  isAddCarFormVisible,
  carDetailsModal,
  form: formReducer,
});
