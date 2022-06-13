import React from 'react';
import { Meals } from '../../models';
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
export interface itemListProps {
    items: Meals[],
    addItemHandler: (item: Meals) => void,
    removeItemHandler: (id: string) => void
}

export const ItemList = ({ items, addItemHandler, removeItemHandler }: itemListProps) => {

    const addItem = (item: Meals) => {
        addItemHandler(item)
    }

    const removeItem = (id: string) => {
        removeItemHandler(id);
    }

    return (
        <ul className="bg-white bg-gray-800 max-w-full rounded-lg">
            {items.map((item: Meals) =>
                <li className="px-6 py-4 border-b border-gray-200 w-full rounded-t-lg text-white">{item.name}
                    <div className="float-right">
                        <span className="text-sm inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">${item.price.toFixed(2)}</span>
                        <span className='text-white'>x</span>
                        <span className="text-sm inline-block m-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">{item.quantity}</span>
                        <FaMinusSquare className='cursor-pointer inline-block fill-white-500 text-xl' onClick={removeItem.bind(null, item.id)}></FaMinusSquare>
                        <FaPlusSquare className='cursor-pointer inline-block fill-white-500 text-xl cu' onClick={addItem.bind(null, item)}></FaPlusSquare>
                    </div>
                </li>
            )}
        </ul>
    )
}