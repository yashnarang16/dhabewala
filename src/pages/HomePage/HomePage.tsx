import React from 'react';
import {
  Header,
  MealsList,
  Loading,
  CartList,
  SubHeading,
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
          <div className="flex flex-row flex-wrap justify-center">
            <div className="basis-full md:basis-7/12">
                <SubHeading>Order your food here.</SubHeading>
                <div className='rounded-lg shadow-md md:h-screen m-5 overflow-auto scroll-smooth'>
                <MealsList meals={meals}></MealsList>
                </div>
            </div>
            <div className="basis-full md:basis-5/12">
              <SubHeading>Your cart.</SubHeading>
              <CartList></CartList>
            </div>
          </div>
        </div>
      </CartContextProvider>
    </main>
  );
};
