import * as React from 'react';
import { connect } from 'react-redux';

import { filterCars } from '@store/cars/cars.actions';

import './FilterBox.scss';

interface PropsFromDispatch {
  filterCars?: typeof filterCars;
}

interface ComponentState {
  filterText: string;
}

class FilterBox extends React.Component<PropsFromDispatch, ComponentState> {
  handleInputChange(event: any): void {
    const { value } = event.target;
    const { filterCars } = this.props;
    filterCars(value);
  }

  public render() {
    return (
      <div className="filter-box">
        <div className="input-section">
          <input
            type="text"
            className="filter-input"
            placeholder="Filter by brand"
            onChange={(event: any) => this.handleInputChange(event)}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { filterCars })(FilterBox);
