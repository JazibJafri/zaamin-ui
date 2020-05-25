import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';

import { RegularText } from './RegularText';

it('renders correctly without text', () => {
    render(<RegularText />);
});

it('renders correctly with text', () => {
    const { queryByText } = render(<RegularText>Hello</RegularText>);
    expect(queryByText('Hello')).toBeTruthy();
});

it('renders with elements as children', () => {
    const { queryByText } = render(
        <RegularText>
            Hello<Text>World</Text>
        </RegularText>,
    );
    expect(queryByText(/hello/i)).toBeTruthy();
});

it('renders with itself as children', () => {
    const { queryByText } = render(
        <RegularText>
            Hello<RegularText>World</RegularText>
        </RegularText>,
    );
    expect(queryByText(/world/i)).toBeTruthy();
});
