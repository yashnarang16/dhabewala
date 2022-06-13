import React from 'react';
import {  Header, MealsList, CartList, Loading } from '../../components';
import { useMeals } from '../../services/useMeals';
import { StringUtils } from '../../utils';
import { CartCtxProvider } from './../../contexts'
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
      <CartCtxProvider>
      <Header></Header>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap">
          <div className="basis-full md:basis-8/12">
         <h1 className='text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800'> Order your Food Here.</h1>
          <MealsList meals={meals}></MealsList>
          </div>
          <div className="basis-full md:basis-4/12">
          <h1 className='text-5xl font-normal leading-normal mt-0 mb-2 text-slate-800'> Your Cart.</h1>
          <CartList></CartList>
          </div>
        </div>
      </div>
      </CartCtxProvider>
    </main>
  );
};
