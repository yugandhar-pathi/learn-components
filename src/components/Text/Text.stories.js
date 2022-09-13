import React from 'react'
import { Text } from './Text';

export default {
    component: Text,
};

const Template = (args) => <Text {...args} />;


export const Default = Template.bind({});
Default.args = {
    children: "I am Medium size text",
};

export const Small = Template.bind({});
Small.args = {
    children: "I am Small size text",
    size: 'small',
};

export const Large = Template.bind({});
Large.args = {
    children: "I am Large size text",
    size: 'large',
};