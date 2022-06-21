import React from 'react';
import {
  MealsList,
  Loading,
  CartList,
  SubHeading,
  Header,
} from '../../components';
import { CartContextProvider } from '../../contexts';
import { useMeals } from '../../services/useMeals';
import { StringUtils } from '../../utils';

export const HomePage = () => {
  const { isLoading, isError, error, meals } = useMeals();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <main>
        <h1>{StringUtils.errorToString(error)}</h1>
      </main>
    );
  }

  return (
    <main>
      <CartContextProvider>
        <Header></Header>
        <div className="container mx-auto">
          <div className="flex flex-column flex-wrap justify-center">
            <div className="basis-full md:basis-7/12 rounded-lg shadow-md container-height overflow-y-scroll overscroll-y-auto scroll-smooth">
                <SubHeading>Order your food here.</SubHeading>  
                <MealsList meals={meals}></MealsList>
            </div>
            <div className="basis-full md:basis-5/12 shadow-md container-height overflow-y-scroll overscroll-y-auto scroll-smooth">
              <SubHeading>Your cart.</SubHeading>
              <CartList></CartList>
            </div>
          </div>
        </div>
      </CartContextProvider>
    </main>
  );
};
