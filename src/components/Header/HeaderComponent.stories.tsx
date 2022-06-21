import React, { Children } from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './Header';


export default {
  title: 'Components/Header',
  component: Header
} as Meta;

const Template: Story = () => <Header/>;

export const HeaderComponent = Template.bind({});
HeaderComponent.storyName = 'Header';

