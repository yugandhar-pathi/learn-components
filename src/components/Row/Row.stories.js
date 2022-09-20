import React from 'react';
import {Row} from './Row'

export default{
    component : Row,
}

export const spaceBetween = () => <Row justifyContent="space-between"><p>Hi</p><p>Hi</p></Row>
export const spaceAround = () => <Row justifyContent="space-around"><p>hello</p><p>hello</p></Row>
export const center = () => <Row justifyContent="center"><p>Hello World</p></Row>