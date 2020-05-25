import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { Button } from './Button';

it('renders correctly with text', () => {
    const fn = jest.fn();
    const { getByText } = render(<Button title={'Click me'} onPress={() => fn} />);
    expect(getByText(/click me/i)).toBeTruthy();
});

it('calls props function on click', () => {
    const onClick = jest.fn();
    const timesFunctionShouldBeCalled = 1;
    const { getByText } = render(<Button title={'Press me'} onPress={onClick} />);
    fireEvent.press(getByText(/press me/i));
    expect(onClick).toBeCalledTimes(timesFunctionShouldBeCalled);
});

it('uses default styles if not passed as props', () => {
    const fn = jest.fn();
    const { getByText } = render(<Button title={'Press me'} onPress={() => fn} />);
    const element = 0;
    const expectedFontSize = 13;
    expect(getByText(/press me/i).props.style[element].fontSize).toBe(expectedFontSize);
});

it('uses user defined styles', () => {
    const initialFont = 20;
    const fn = jest.fn();
    const { getByText } = render(
        <Button
            onPress={() => fn}
            styles={{ title: { fontSize: initialFont } }}
            title={'Press me'}
        />,
    );
    const element = 0;
    const expectedFontSize = 20;
    expect(getByText(/press me/i).props.style[element].fontSize).toBe(expectedFontSize);
});
