import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { AppState, Cars } from '@store/types';
import { showCarDetailsModal } from '@store/car-details-modal/car-details-modal.actions';

import { CarItem } from './CarCard';

import './CarsList.scss';

interface PropsFromState {
  cars?: Cars;
}

interface PropsFromDispatch {
  showCarDetailsModal?: typeof showCarDetailsModal;
}

type ComponentProps = PropsFromState & PropsFromDispatch;

const CarsList: React.SFC<ComponentProps> = (props) => {
  return (
    <div className="cars-list-container">
      {props.cars.sort((a, b) => a.brand > b.brand ? 1 : 0)
        .map((car, index) => (
          <CarItem car={car} key={index} onClick={() => props.showCarDetailsModal(car)} />
        ))
      }
    </div>
  );
};

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ cars }) => ({ cars });

export default connect(mapStateToProps, { showCarDetailsModal })(CarsList);
