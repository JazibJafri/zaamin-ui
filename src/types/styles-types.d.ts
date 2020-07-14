import { ViewStyle, ImageStyle, TextStyle, StyleProp, TextProps } from 'react-native';

declare global {
    interface ButtonProps {
        onPress: () => unknown;
        title: string;
        buttonStyle?: {
            button?: ViewStyle;
            title?: TextStyle;
        };
        size?: FontTypes;
        icon?: {
            name: string;
            size?: number;
            style?: ViewStyle | TextStyle;
        };
        dismissKeyboard?: boolean;
    }
    type ButtonStyleType = Pick<ButtonProps, 'buttonStyle'>;

    interface WithTextProps extends TextProps {
        size?: FontTypes;
    }
}
