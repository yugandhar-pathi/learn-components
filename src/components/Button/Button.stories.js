import React from 'react'
import { Button } from './Button';

export default {
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = () => <Button label="button" primary/>
// Primary.args = {
//     label: 'Button',
//     primary: true
// };

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    secondary: true
};