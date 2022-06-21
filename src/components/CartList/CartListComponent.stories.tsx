import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CartList } from './CartList';

export default {
  title: 'Components/CartList',
  component: CartList,
} as Meta;

const Template: Story = () => <CartList/>;

export const CartListComponent = Template.bind({});
CartListComponent.storyName = 'CartList';

