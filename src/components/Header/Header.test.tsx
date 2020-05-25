import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import { Header } from './Header';

it('renders correctly with text', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Header openDrawer={onClick}>Header Text</Header>);
    expect(getByText(/header text/i)).toBeTruthy();
});

it('renders correctly with element', () => {
    const onClick = jest.fn();
    const { getByText } = render(
        <Header openDrawer={onClick}>
            <Text>Header Text</Text>
        </Header>,
    );
    expect(getByText(/header text/i)).toBeTruthy();
});

it('opens drawer on menu press', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Header openDrawer={onClick}>Header Text</Header>);
    const firstChild = 0;
    const menu = getByText(/header text/i)?.parent?.children[firstChild];
    expect(menu).toBeTruthy();
    if (menu && typeof menu !== 'string') fireEvent.press(menu);
    const functionCalledTimes = 1;
    expect(onClick).toBeCalledTimes(functionCalledTimes);
});
