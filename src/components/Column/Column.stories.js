import React from "react";
import {Column} from "./Column";

export default {
    component : Column, 
}

export const spaceBetween = () => <Column ><p>First Column</p><p>Second Column</p></Column>
export const spaceAround = () => <Column ><p>First Column</p><p>Second Column</p></Column>
export const center = () => <Column ><p>Hello World</p></Column>