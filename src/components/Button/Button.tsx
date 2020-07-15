import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Keyboard,
    TouchableOpacityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Absolute Imports */
import { globalStyles } from 'styles/app.styles';
import { RegularText } from 'components/RegularText';

const defaultButton: ButtonStyleType = {
    buttonStyle: {
        button: globalStyles.defaultButton,
        title: globalStyles.defaultButtonTitle,
    },
};

type Props = ButtonProps & TouchableOpacityProps;

const Button: React.FC<Props> = ({
    onPress,
    title,
    buttonStyle = defaultButton.buttonStyle,
    icon,
    dismissKeyboard = false,
    ...rest
}) => {
    const { button, title: caption } = StyleSheet.create({
        ...buttonStyle,
    });
    const myIcon = icon ? (
        <Icon name={icon.name} size={icon.size} color={caption?.color} />
    ) : null;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={button}
            onPressOut={() => dismissKeyboard && Keyboard.dismiss()}
        >
            <RegularText style={caption} {...rest}>
                {title}
            </RegularText>
            {myIcon && <View style={icon?.style}>{myIcon}</View>}
        </TouchableOpacity>
    );
};

export { Button };
