import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts";
import { Meals } from "../../models";
import { ItemList } from "../../UI";

export const CartList = () => {
    const cartCtx = useContext(CartContext);
    const allItems: Meals[] = cartCtx.items;
    const [totalAmount, setTotalAmount] = useState(0);


    const addItem = (item: Meals) => {
        cartCtx.addItem({ ...item, quantity: 1 });
    }

    const removeItem = (id: string) => {
        cartCtx.removeItem(id);
    }

    useEffect(() => {
        if (allItems.length > 0) {
            const amount: number = allItems.reduce((current, item) => {
                return current + item.price * item.quantity;
            }, 0)
            setTotalAmount(amount);
        } else {
            setTotalAmount(0);
        }
    }, [allItems])

    return <div className="max-w-full rounded-lg shadow-md bg-white py-3 px-3 border-b border-amber-200">
        <ItemList items={cartCtx.items} addItemHandler={addItem} removeItemHandler={removeItem}></ItemList>
        <div className="flex justify-between items-center py-1 px-3">
            <span className="font-bold text-gray-800">Total</span>
            <span className="font-bold text-gray-800">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex flex-row-reverse p-2">
            <button className="text-white m-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Order</button>
            <button className="text-white m-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Discard</button>
        </div>
    </div>
}