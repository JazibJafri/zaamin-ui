import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

/* Absolute Imports */
import { globalStyles } from 'styles/app.styles';
import { RegularText } from 'components/RegularText';

const defaultButton: ButtonStyleType = {
    styles: {
        button: globalStyles.defaultButton,
        title: globalStyles.defaultButtonTitle,
    },
};

const Button = ({ onPress, title, styles = defaultButton.styles }: ButtonProps) => {
    const { button, title: caption } = StyleSheet.create({
        ...styles,
    });

    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <RegularText style={caption}>{title}</RegularText>
        </TouchableOpacity>
    );
};

export { Button };
