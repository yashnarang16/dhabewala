import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { SubHeading } from './SubHeading';


export default {
  title: 'Components/SubHeading',
  component: SubHeading
} as Meta;

const Template: Story = () => <SubHeading children='Order your food here' />;

export const subHeadingComponent = Template.bind({});
subHeadingComponent.storyName = 'SubHeading';

