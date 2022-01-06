import React, { Fragment } from 'react';

import AvailableMeals from '../Meals/AvailableMeals';
import MealsSummary from '../Meals/MealsSummary';

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
