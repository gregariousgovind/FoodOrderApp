import React from 'react';
import './Input.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
