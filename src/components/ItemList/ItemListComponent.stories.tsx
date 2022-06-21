import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';

import { MOCKMEALS } from '../../mocks/mockMeals';
import { ItemList } from './ItemList';

export default {
  title: 'Components/ItemList',
  component: ItemList
} as Meta;

const Template: Story = () => <ItemList items={MOCKMEALS} onItemAdd={()=> {}} onItemRemove={()=> {}} />;

export const ItemListComponent = Template.bind({});
ItemListComponent.storyName = 'ItemList';

