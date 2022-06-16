import React from 'react';
import { MenuItem } from '../../models';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';
import { Badge } from '../Badge';
export interface itemListProps {
  items: MenuItem[];
  onItemAdd: (item: MenuItem) => void;
  onItemRemove: (id: string) => void;
}

export const ItemList = ({ items, onItemAdd, onItemRemove }: itemListProps) => {
  const addItem = (item: MenuItem) => {
    onItemAdd(item);
  };

  const removeItem = (id: string) => {
    onItemRemove(id);
  };

  return (
    <ul className="bg-white bg-gray-800 max-w-full rounded-lg">
      {items.map((item: MenuItem) => (
        <li
          key={item.id}
          className="px-6 py-4 border-b border-gray-200 w-full rounded-t-lg text-white"
        >
          {item.name}
          <div className="float-right">
            <Badge className="bg-yellow-500">{item.price.toFixed(2)}</Badge>
            <span className="text-white">x</span>
            <Badge className="bg-yellow-500">{item.quantity}</Badge>
            <FaMinusSquare
              className="cursor-pointer inline-block fill-white-500 text-xl"
              onClick={removeItem.bind(null, item.id)}
            ></FaMinusSquare>
            <FaPlusSquare
              className="cursor-pointer inline-block fill-white-500 text-xl cu"
              onClick={addItem.bind(null, item)}
            ></FaPlusSquare>
          </div>
        </li>
      ))}
    </ul>
  );
};
