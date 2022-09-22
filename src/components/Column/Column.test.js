import {render, screen} from '@testing-library/react'
import { Column } from './Column'

test('Column component', ()=>{
    render(<Column dataTestId = "column-id">
                <p>Column one</p>
                <p>Column two</p>
            </Column>
        )
    expect(screen.getByTestId("column-id").textContent).toBe("Column oneColumn two")
})

test("snapshot for column component", () => {
    render(<Column dataTestId = "column-id"><p>Column one</p><p>Column two</p></Column>)
    expect(screen.getByTestId("column-id")).toMatchSnapshot()
})