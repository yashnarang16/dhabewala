import React, { useContext } from "react";
import { CartContext } from "../../contexts";
import { Meals } from "../../models";
import { ItemCard } from "../../UI";

export interface MealsProps {
    meals: Array<Meals>
}

export const MealsList = ({ meals }: MealsProps) => {
    const cartCtx = useContext(CartContext);
    const addItemInCart = (meal: Meals) => {
        cartCtx.addItem(meal);
    }

    return <div className="flex flex-row flex-wrap">
        {meals.map((meal: Meals) => <ItemCard key={meal.id} meal={meal} addEventHandler={addItemInCart}></ItemCard>)}
    </div>
}