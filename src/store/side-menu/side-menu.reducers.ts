import { ActionTypes } from '@store/action-types';
import { Reducer } from 'redux';

const { TOGGLE } = ActionTypes.SideMenuActions;

export const isSideMenuVisible: Reducer<boolean> = (state = false, action) => {
  switch (action.type) {
    case TOGGLE:
      return !state;
    default:
      return state;
  }
};
