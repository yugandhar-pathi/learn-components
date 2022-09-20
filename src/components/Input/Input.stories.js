import React from 'react';
import { Input } from './Input';

export default{
    component : Input,
}

export const basic = () => <Input text="Enter User Name Basic" styleType="basic"/>
export const outlined = () => <Input text="Enter User Name outlined" styleType="outlined"/>
export const filled = () => <Input text="Enter User Name Filled" styleType="filled"/>