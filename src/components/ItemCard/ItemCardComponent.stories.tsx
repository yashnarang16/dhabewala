import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { ItemCard } from './ItemCard';
import { MOCKMEALS } from '../../mocks/mockMeals';

export default {
  title: 'Components/ItemCard',
  component: ItemCard
} as Meta;

const Template: Story = () => <div className='flex'><ItemCard meal={MOCKMEALS[0]} addEventHandler={()=> {}}/></div>;

export const HeaderComponent = Template.bind({});
HeaderComponent.storyName = 'ItemCard';

