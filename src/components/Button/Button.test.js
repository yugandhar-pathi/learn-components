import {render, screen} from '@testing-library/react'
import { Button } from './Button'

test('Button component', () => {
    render(<Button label="test" dataTestId="test-button" />)

    expect(screen.getByTestId('test-button').textContent).toBe("test")
})

test('Primary button Snapshot', () => {
    render(<Button label="primary" primary dataTestId="test-button" />)

    expect(screen.getByTestId('test-button')).toMatchSnapshot()
})

test('Secondary button Snapshot', () => {
    render(<Button label="secondary" secondary dataTestId="test-button" />)

    expect(screen.getByTestId('test-button')).toMatchSnapshot()
})