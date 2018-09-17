import { ActionTypes } from '@store/action-types';
import { Reducer } from 'redux';
import { CarDetailsModal } from '@store/car-details-modal/car-details-modal.types';

const { SHOW, HIDE } = ActionTypes.CarDetailsModal;

const INITIAL_STATE = {
  car: {},
  isModalVisible: false,
};

export const carDetailsModal: Reducer<CarDetailsModal> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW:
      return { car: action.payload, isModalVisible: true };
    case HIDE:
      return { car: null, isModalVisible: false };
    default:
      return state;
  }
};
