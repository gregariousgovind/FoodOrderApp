import React, { useEffect, useState } from 'react';
import MealItem from '../Meals/MealItem/MealItem';
import Card from '../UI/Card';
import './AvailableMeals.scss';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://react-meals-c5ead-default-rtdb.firebaseio.com/meals.json',
        {}
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }

      setMeals(loadedMeals);
      setIsLoding(false);
    };

    fetchMeals().catch((error) => {
      setIsLoding(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="meals-loading">
        <p>Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="meals-error">
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
