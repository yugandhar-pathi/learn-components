import {render, screen} from '@testing-library/react';
import {Card} from './Card';

test('Card component', ()=>{
    render(<Card heading="header" dataTestId="test-card" buttonName="my button"/>)
    expect(screen.getByTestId("test-card").textContent).toBe("headermy button")
})

test('Card snapshot', ()=>{
    render(<Card heading="header" content="my Content" picture="image" buttonName="my Button" altText="alternate text" dataTestId="test-card"/>)
    expect(screen.getByTestId("test-card")).toMatchSnapshot()
})