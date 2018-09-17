import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { AddCarBox } from './AddCarBox';
import { DescriptionBox } from './DescriptionBox/DescriptionBox';

import { AppState, Cars } from '@store/types';
import { hideAddCarForm, showAddCarForm } from '@store/add-car-form/add-car-form.actions';
import { removeCar } from '@store/selected-cars/selected-cars.actions';

import { SelectedCarBox } from './SelectedCarBox';

import './Comparison.scss';

interface PropsFromState {
  selectedCars?: Cars;
  isAddCarFormVisible?: boolean;
}

interface PropsFromDispatch {
  showAddCarForm?: typeof showAddCarForm;
  hideAddCarForm?: typeof hideAddCarForm;
  removeCar?: typeof removeCar;
}

type ComponentProps = PropsFromState & PropsFromDispatch;

class Comparison extends React.Component<ComponentProps, {}> {

  sections = [
    {
      fieldName: 'engine', subFields: [
        { title: 'Fuel Tank Capacity', subFieldName: 'fuelTankCapacity' },
        { title: 'Fuelling System', subFieldName: 'fuellingSystem' },
        { title: 'Horse Power', subFieldName: 'horsePower' },
        { title: 'Torque', subFieldName: 'torque' },
        { title: 'Cylinder Capacity', subFieldName: 'cylinderCapacity' },
        { title: 'Valves Per Cylinder', subFieldName: 'valvesPerCylinder' },
        { title: 'Compression Ratio', subFieldName: 'compressionRation' },
      ],
    },
    {
      fieldName: 'dimensions', subFields: [
        { title: 'Height', subFieldName: 'height' },
        { title: 'Width', subFieldName: 'width' },
        { title: 'Length', subFieldName: 'length' },
      ],
    },
  ];

  renderSelectionBox() {
    const { selectedCars, showAddCarForm, isAddCarFormVisible, removeCar } = this.props;
    return (
      <div className="selection-box">
        <div className="selection-box-empty-child" />
        {selectedCars.map((car, index) => (
          <SelectedCarBox car={car} key={index} removeCar={() => removeCar(car.name)} />
        ))}
        {selectedCars.length < 3 &&
        <AddCarBox
          showAddCarForm={isAddCarFormVisible}
          onClick={() => showAddCarForm()}
        />
        }
      </div>
    );
  }

  renderSections(): React.ReactNode {
    const descriptionBoxes = this.sections.map(({ fieldName, subFields }) =>
      subFields.map(({ title, subFieldName }, index) => (
        <DescriptionBox
          title={title}
          values={this.getBoxValues(fieldName, subFieldName)}
          key={index}
        />
      )));

    return (
      <div className="description-box-list">
        {descriptionBoxes}
      </div>
    );
  }

  getBoxValues(fieldName: string, subFieldName: string): string[] | number[] {
    const { selectedCars } = this.props;
    return selectedCars.map((car: any) => car[fieldName][subFieldName]);
  }

  public render() {
    const { isAddCarFormVisible, hideAddCarForm } = this.props;
    return (
      <div className="comparison-container">
        {this.renderSelectionBox()}
        {this.renderSections()}
        {isAddCarFormVisible && <div className="modal-container" onClick={() => hideAddCarForm()} />}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ selectedCars, isAddCarFormVisible }) => ({ selectedCars, isAddCarFormVisible });

export default connect(mapStateToProps, { showAddCarForm, hideAddCarForm, removeCar })(Comparison);
