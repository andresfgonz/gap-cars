import * as React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { WrappedFieldProps } from 'redux-form';

import './SelectBox.scss';

export const SelectBox: React.SFC<WrappedFieldProps> = (props) => {
  const { input, meta: { dirty, touched, invalid, error } } = props;
  return (
    <div className="select-box-container">
      <select className="select-box" {...input} required>
        {props.children}
      </select>
      <FaCaretDown className="drop-down-icon" />
      {
        touched && invalid && <div className="message">{error}</div>
      }
    </div>
  );
};
