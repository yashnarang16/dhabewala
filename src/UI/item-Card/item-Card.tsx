import React from "react";
import { Meals } from "../../models";

interface ItemCardProps {
    meal: Meals,
    addEventHandler: (meal: Meals) => void
}

export const ItemCard = ({ meal, addEventHandler }: ItemCardProps) => {
   const image = `./images/${meal.image}`;
   const addItem = () => {
       addEventHandler(meal);
   }
    return <div className="max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
        <img className="w-full h-4/6 rounded-t-lg" src={image} alt={meal.imageDescription} />
        <div className="px-5 pt-0.5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{meal.name} </h5>
            <span className="itallic tracking-tight text-gray-900 dark:text-white">{meal.description}</span>
            <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${meal.price.toFixed(2)}</span>
                <button className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={addItem}>Add to cart</button>
            </div>
        </div>
    </div>
}