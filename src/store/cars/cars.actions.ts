import { ActionTypes } from '@store/action-types';

const { FILTER } = ActionTypes.CarActions;

export const filterCars = (filterText: string) => ({
  type: FILTER,
  payload: filterText,
});
