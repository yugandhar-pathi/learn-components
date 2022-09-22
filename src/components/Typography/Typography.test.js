import {render, screen} from '@testing-library/react'
import { Typography } from './Typography'

test("Typography component",()=>{
    render(<Typography dataTestId= "typography-id"variant1="one" variant2="two" variant3="three" variant4="four" variant5="five" variant6="six" text="my text"/>)
    expect(screen.getByTestId("typography-id").textContent).toBe("my text")
})

test("snapshot for Typography component",()=>{
    render(<Typography dataTestId= "typography-id"variant1="one" variant2="two" variant3="three" variant4="four" variant5="five" variant6="six" text="my text"/>)
    expect(screen.getByTestId("typography-id")).toMatchSnapshot()
})