import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';

interface OwnProps extends TextProps {
    style?: StyleProp<TextStyle>;
    children?: React.ReactNode;
}

const RegularText = (props: OwnProps) => {
    const { style: textStyles, children, ...rest } = props;
    const style = [textStyles];
    return (
        <Text style={style} {...rest}>
            children
        </Text>
    );
};

export { RegularText };
