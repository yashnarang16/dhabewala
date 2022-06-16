import React from 'react';
import { useCart } from '../../contexts';
import { MenuItem } from '../../models';
import { ItemCard } from '../ItemCard';

export interface MealsProps {
  meals: Array<MenuItem>;
}

export const MealsList = ({ meals }: MealsProps) => {
  const cartContext = useCart();
  const addItemInCart = (meal: MenuItem) => {
    cartContext?.dispatch({ type: 'ADD', item: meal });
  };

  return (
    <div className="flex flex-row flex-wrap">
      {meals.map((meal: MenuItem) => (
        <ItemCard
          key={meal.id}
          meal={meal}
          addEventHandler={addItemInCart.bind(null, meal)}
        ></ItemCard>
      ))}
    </div>
  );
};
