import { render, fireEvent } from 'react-native-testing-library';
import React from 'react';
import { Thumbnail } from './Thumbnail';

const timeOut = 10000;

it(
    'displays updated language',
    () => {
        const dispatchMock = jest.fn();
        const { getByText, queryByText } = render(
            <Thumbnail dispatch={dispatchMock} language="test" />,
        );
        expect(getByText(/hello/i)).toBeTruthy();
        expect(queryByText(/hei/i)).toBeFalsy();

        const button = getByText(/change/i);
        expect(button).toBeTruthy();
        if (button) fireEvent.press(button);

        expect(getByText(/hei/i)).toBeTruthy();
        expect(queryByText(/hello/i)).toBeFalsy();
    },
    timeOut,
);
