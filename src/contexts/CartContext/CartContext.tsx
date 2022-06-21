import React, { useReducer } from 'react';
import { MenuItem } from '../../models';

type Action = { type: 'ADD'; item: MenuItem } | { type: 'REMOVE'; id: string };
type Dispatch = (action: Action) => void;
type State = { items: MenuItem[] };
type CartContextProviderProps = { children: React.ReactNode };

const CartContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const ctxReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD': {
      const existingItemIndex = state.items.findIndex((item) => {
        return item.id === (action.item as MenuItem)?.id;
      });
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedNewItem = {
          ...existingItem,
          quantity: existingItem.quantity + (action.item as MenuItem).quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedNewItem;
      } else {
        updatedItems = state.items.concat(action.item as MenuItem);
      }
      return { items: updatedItems };
    }

    case 'REMOVE': {
      const existingItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem.quantity > 1) {
        const updatedNewItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedNewItem;
      } else {
        updatedItems = state.items.filter(
          (item) => item.id !== (action?.id as string)
        );
      }

      return { items: updatedItems };
    }

    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(ctxReducer, { items: [] });
  const cart = { state, dispatch };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { CartContextProvider, useCart };
