import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FaCheck } from 'react-icons/fa';

import { SelectBox } from '@components/SelectBox';
import { Button } from '@components/Button';

import { addSelectedCar } from '@store/selected-cars/selected-cars.actions';
import { hideAddCarForm } from '@store/add-car-form/add-car-form.actions';
import { AppState, Cars } from '@store/types';

import './AddCarForm.scss';

interface PropsFromState {
  cars?: Cars;
}

interface PropsFromDispatch {
  addSelectedCar?: typeof addSelectedCar;
  hideAddCarForm?: typeof hideAddCarForm;
}

type ComponentProps = PropsFromDispatch & PropsFromState & InjectedFormProps;

interface ComponentState {
  brands: string[];
  models: string[];
  lines: string[];
}

class AddCarForm extends React.Component<ComponentProps, ComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      brands: ['BMW', 'Mazda', 'Renault', 'Suzuki'],
      models: [],
      lines: [],
    };

    this.handleBrandSelectorChange = this.handleBrandSelectorChange.bind(this);
    this.handleModelSelectorChange = this.handleModelSelectorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBrandSelectorChange(event: any, newValue: string): void {
    const { cars } = this.props;
    const models = cars.filter(car => car.brand === newValue).map(car => car.model);
    this.setState({ models });
  }

  handleModelSelectorChange(event: any, model: string): void {
    const { cars } = this.props;
    const lines = cars.filter(car => car.model === model).map(car => car.name);
    this.setState({ lines });
  }

  handleSubmit({ line }: any) {
    const { cars, addSelectedCar, hideAddCarForm } = this.props;
    const selectedCar = cars.find(car => car.name === line);
    addSelectedCar(selectedCar);
    hideAddCarForm();
  }

  public render() {
    const { handleSubmit } = this.props;
    return (
      <div className="add-car-form">
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name="brand"
            component={SelectBox}
            onChange={this.handleBrandSelectorChange}
          >
            <option>Select Brand</option>
            {this.state.brands.map((brand, index) => (
              <option value={brand} key={index}>{brand}</option>
            ))}
          </Field>
          <Field
            name="model"
            component={SelectBox}
            onChange={this.handleModelSelectorChange}
          >
            <option>Select model</option>
            {this.state.models.map((model, index) => (
              <option value={model} key={index}>{model}</option>
            ))}
          </Field>
          <Field name="line" component={SelectBox}>
            <option>Select line</option>
            {this.state.lines.map((line, index) => (
              <option value={line} key={index}>{line}</option>
            ))}
          </Field>
          <Button icon={<FaCheck />} text="Add" />
        </form>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<PropsFromState, {}, AppState> =
  ({ cars }) => ({ cars });

const validate = (values: any) => {
  const errors: any = {};
  if (!values.brand) {
    errors.brand = 'select an option';
  }
  if (!values.model) {
    errors.model = 'select an option';
  }
  if (!values.line) {
    errors.line = 'select an option';
  }

  return errors;
};

export default connect(mapStateToProps, { addSelectedCar, hideAddCarForm })(reduxForm({
  validate,
  form: 'addCarForm',
})(AddCarForm));
