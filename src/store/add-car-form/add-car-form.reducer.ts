import { ActionTypes } from '@store/action-types';
import { Reducer } from 'redux';

const { SHOW, HIDE } = ActionTypes.AddCarFormActions;

export const isAddCarFormVisible: Reducer<boolean> = (state = false, action) => {
  switch (action.type) {
    case SHOW:
      return true;
    case HIDE:
      return false;
    default:
      return state;
  }
};
