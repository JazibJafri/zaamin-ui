import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Absolute Imports */
import { globalStyles } from 'styles/app.styles';
import { RegularText } from 'components/RegularText';

const defaultButton: ButtonStyleType = {
    style: {
        button: globalStyles.defaultButton,
        title: globalStyles.defaultButtonTitle,
    },
};

const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    style = defaultButton.style,
    icon,
    ...rest
}) => {
    const { button, title: caption } = StyleSheet.create({
        ...style,
    });
    const myIcon = icon ? (
        <Icon name={icon.name} size={icon.size} color={caption?.color} />
    ) : null;

    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <RegularText style={caption} {...rest}>
                {title}
            </RegularText>
            {myIcon && <View style={icon?.style}>{myIcon}</View>}
        </TouchableOpacity>
    );
};

export { Button };
