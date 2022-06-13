
import React, { useReducer } from 'react';
import { MealCtx, Meals } from '../../models';


const defaultCart = {
    items: []
}
const CartContext = React.createContext<MealCtx>({
    items: [],
    addItem: (item: Meals) => { },
    removeItem: (id: string) => { }
})



const ctxReducer = (state: { items: Meals[] }, action: { type: string, item: Meals | string | undefined }) => {
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === (action.item as Meals)?.id;
        })
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingItem) {
            const updatedNewItem = { ...existingItem, quantity: existingItem.quantity + (action.item as Meals).quantity }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedNewItem;
        } else {
            updatedItems = state.items.concat(action.item as Meals);
        }
        return { items: updatedItems };
    }
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((item) => {
            return item.id === action.item;
        })
        const existingItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingItem.quantity > 1) {
            const updatedNewItem = { ...existingItem, quantity: existingItem.quantity - 1 }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedNewItem;
        } else {
            updatedItems = state.items.filter(item => item.id !== action?.item as string);
        }

        return { items: updatedItems };
    }
    return defaultCart;
}


interface providerProps {
    children?: React.ReactNode;
}
function CartCtxProvider({ children }: providerProps) {
    const [cartCtx, dispatchActionCtx] = useReducer(ctxReducer, defaultCart);

    const addHandler = (item: Meals) => {
        dispatchActionCtx({ type: 'ADD', item: item });
    }

    const removeHandler = (id: string) => {
        dispatchActionCtx({ type: 'REMOVE', item: id });
    }


    const cart: MealCtx = {
        items: cartCtx.items,
        addItem: addHandler,
        removeItem: removeHandler
    }
    return (
        <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    )

}

export { CartCtxProvider, CartContext }; 