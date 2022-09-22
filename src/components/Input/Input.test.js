import {render, screen} from '@testing-library/react';
import {Input} from './Input'

test("Input component", ()=>{
    render(<Input text="my text" dataTestId='input-id' placeHolder="my placeholder" styleType="basic"/>)
    expect(screen.getByTestId("input-id").textContent).toBe("my text")
})

test("snapshot for Input", ()=>{
    render(<Input text="my text" dataTestId='input-id' placeHolder="my placeholder" styleType="basic"/>)
    expect(screen.getByTestId("input-id")).toMatchSnapshot()
})