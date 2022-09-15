import React from "react";
import { Card } from "./Card";

export default{
    component : Card,
}

export const basicCard = () => <Card heading="Basic card" content="this is a basic card" buttonName="Learn More"></Card>
export const pictureCard = () => <Card heading="Basic card" picture="https://www.bing.com/th?id=OIP.Ky0Jd3zUxcwi7S5XWV2bxAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" altText="Rose" buttonName="Learn More"></Card>
export const complexCard = () => <Card heading="Basic card" content="this is a basic card" picture="https://www.bing.com/th?id=OIP.Ky0Jd3zUxcwi7S5XWV2bxAHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" altText="Rose" buttonName="Learn More"></Card>