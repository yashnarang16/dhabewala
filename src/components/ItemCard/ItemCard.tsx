import React from 'react';
import { MenuItem } from '../../models';
import { Button } from '../Button';

interface ItemCardProps {
  meal: MenuItem;
  addEventHandler: () => void;
}

export const ItemCard = ({ meal, addEventHandler }: ItemCardProps) => {
  const image = `./images/${meal.image}`;

  return (
    <div className="max-w-sm rounded-lg max-h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      <img
        className="w-full h-4/6 rounded-t-lg"
        src={image}
        alt={meal.imageDescription}
      />
      <div className="p-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {meal.name}
        </h5>
        <span className="tracking-tight text-gray-900 dark:text-white">
          {meal.description}
        </span>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${meal.price.toFixed(2)}
          </span>
          <Button
            className="bg-amber-800 hover:bg-amber-700"
            onClick={addEventHandler}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
