import {render, screen} from '@testing-library/react';
import {Row} from './Row';

test("Row Component", () =>{
    render(<Row dataTestId="row-id">
    <div>
     <p>hi</p>
     <p>Hello</p>
    </div> 
    </Row>)
    expect(screen.getByTestId("row-id").textContent).toBe("hiHello")
})

test("Snapshot for row", ()=>{
    render(<Row dataTestId="row-id">
    <div>
     <p>hi</p>
     <p>Hello</p>
    </div> 
    </Row>)
    expect(screen.getByTestId("row-id")).toMatchSnapshot()
})
