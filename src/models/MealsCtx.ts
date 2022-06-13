import { Meals } from "./Meals";

export interface MealCtx {
    items: Array<Meals>;
    addItem: (item: Meals) => void;
    removeItem: (id: string) => void ;
}