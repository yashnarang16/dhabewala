import React from 'react';
import { useCart } from '../../contexts';
import { MenuItem } from '../../models';
import { Button } from '../Button';
import { ItemList } from '../ItemList';

export const CartList = () => {
  const cartContext = useCart();
  const items = cartContext.state.items;
  let amount = 0;
  if (items.length > 0) {
    amount = items.reduce((current, item) => {
      return current + item.price * item.quantity;
    }, 0);
  }

  const addItem = (item: MenuItem) => {
    cartContext?.dispatch({ type: 'ADD', item: { ...item, quantity: 1 } });
  };

  const removeItem = (id: string) => {
    cartContext?.dispatch({ type: 'REMOVE', id: id });
  };

  return (
    <div className="max-w-full rounded-lg shadow-md bg-white py-3 px-3 border-b border-amber-200">
      <ItemList
        items={items}
        onItemAdd={addItem}
        onItemRemove={removeItem}
      ></ItemList>
      <div className="flex justify-between items-center py-1 px-3">
        <span className="font-bold text-gray-800">Total</span>
        <span className="font-bold text-gray-800">${amount.toFixed(2)}</span>
      </div>
      <div className="flex flex-row-reverse p-2">
        <Button className="bg-green-700 hover:bg-green-800 m-2">Order</Button>
        <Button className="bg-red-700 hover:bg-red-800 m-2">Discard</Button>
      </div>
    </div>
  );
};
