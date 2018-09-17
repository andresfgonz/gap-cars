import * as React from 'react';
import { FaTimes } from 'react-icons/fa';
import { connect, MapStateToProps } from 'react-redux';

import { hideCarDetailsModal } from '@store/car-details-modal/car-details-modal.actions';
import { CarDetailsModal } from '@store/car-details-modal/car-details-modal.types';
import { AppState } from '@store/types';
import { Car } from '@store/cars/cars.types';

import './CarDetailsModal.scss';

interface PropsFromState {
  carDetailsModal?: CarDetailsModal;
}

interface PropsFromDispatch {
  hideCarDetailsModal?: typeof hideCarDetailsModal;
}

type ComponentProps = PropsFromState & PropsFromDispatch;

const CarDetailsModal: React.SFC<ComponentProps> =
  ({ carDetailsModal: { car, isModalVisible }, hideCarDetailsModal }) => {
    if (!isModalVisible) return null;
    const {
      brand,
      imageUrl,
      model,
      name,
      price,
      engine,
    } = car as Car;

    return (
      <div className="car-details-modal">
        <div className="modal-content">
          <div className="title">
          </div>
          <div className="left-section">
            <div className="car-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="car-name">{brand} {model} {name}</div>
            <div className="car-price">{price}</div>
          </div>
          <div className="right-section">
            {
              Object.keys(engine).map(key => (
                <div className="row" key={key}>
                  <div className="property">{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</div>
                  <div className="desc">{(engine as any)[key]}</div>
                </div>
              ))
            }
          </div>
          <div className="close-button" onClick={() => hideCarDetailsModal()}>
            <FaTimes/>
          </div>
        </div>
      </div>
    );
  };

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ carDetailsModal }) => ({ carDetailsModal });

export default connect(mapStateToProps, { hideCarDetailsModal })(CarDetailsModal);
