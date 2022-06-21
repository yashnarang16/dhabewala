import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';

import { MOCKMEALS } from '../../mocks/mockMeals';
import { MealsList } from './MealsList';

export default {
  title: 'Components/MealsList',
  component: MealsList
} as Meta;

const Template: Story = () => <MealsList meals={MOCKMEALS}></MealsList>;

export const HeaderComponent = Template.bind({});
HeaderComponent.storyName = 'MealsList';

