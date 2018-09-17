import { ActionTypes } from '@store/action-types';

const { TOGGLE } = ActionTypes.SideMenuActions;

export const toggleMenu = () => ({ type: TOGGLE });
