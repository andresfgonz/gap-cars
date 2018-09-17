import { ActionTypes } from '@store/action-types';

const { SHOW, HIDE } = ActionTypes.AddCarFormActions;

export const showAddCarForm = () => ({ type: SHOW });
export const hideAddCarForm = () => ({ type: HIDE });
