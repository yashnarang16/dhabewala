import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta;


const Template: Story = (args) => <Badge className='bg-amber-800' children='$12.00' />;

export const BadgeComponent = Template.bind({});
BadgeComponent.storyName = 'Badge';
BadgeComponent.args = { className: 'bg-amber-800' }

