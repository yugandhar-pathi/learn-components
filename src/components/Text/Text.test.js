import {render, screen} from '@testing-library/react'
import {Text} from './Text'


test("Large Button",() => {
    render(<Text size="large" dataTestId='large-text'>Large</Text>)

    expect(screen.getByTestId('large-text').textContent).toBe('Large')
})

test("Snapshot Small Button",() => {
    render(<Text size="large" dataTestId='large-text'>Small</Text>)

    expect(screen.getByTestId('large-text')).toMatchSnapshot()
})

test("Snapshot medium Button",() => {
    render(<Text dataTestId='large-text'>medium</Text>)

    expect(screen.getByTestId('large-text')).toMatchSnapshot()
})