import React from 'react';
import { Input } from './Input';

export default{
    component : Input,
}

export const basic = () => <Input text="Enter User Name Basic" basic/>
export const outlined = () => <Input text="Enter User Name outlined" outlined/>
export const filled = () => <Input text="Enter User Name Filled" filled/>