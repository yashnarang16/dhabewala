import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;


const Template: Story = (args) => <Button className='bg-amber-800 hover:bg-amber-700' children='Order' />;

export const ButtonComponent = Template.bind({});
ButtonComponent.storyName = 'Button';
ButtonComponent.args = { className: 'bg-amber-800 hover:bg-amber-700', children: 'Order' }
