import React, { useRef } from 'react';
import './Checkout.scss';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChar = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostaCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostaCodeIsValid = !isNotFiveChar(enteredPostaCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostaCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      
    }
  };

  return (
    <form className="meal-form" onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
