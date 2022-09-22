import {render, screen} from '@testing-library/react';
import {Row} from './Row';

test("Row Component", () =>{
    render(<Row dataTestId="row-id">
     <p>hi</p>
     <p>Hello</p> 
    </Row>)
    expect(screen.getByTestId("row-id").textContent).toBe("hiHello")
})

test("Snapshot for row", ()=>{
    render(<Row dataTestId="row-id">
     <p>hi</p>
     <p>Hello</p>
    </Row>)
    expect(screen.getByTestId("row-id")).toMatchSnapshot()
})
