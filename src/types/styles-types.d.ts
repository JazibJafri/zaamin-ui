import { ViewStyle, ImageStyle, TextStyle, StyleProp, TextProps } from 'react-native';

declare global {
    interface ButtonProps {
        onPress: () => unknown;
        title: string;
        style?: {
            button?: ViewStyle;
            title?: TextStyle;
        };
        size?: FontTypes;
        icon?: {
            name: string;
            size?: number;
            style?: ViewStyle | TextStyle;
        };
    }
    type ButtonStyleType = Pick<ButtonProps, 'style'>;

    interface WithTextProps extends TextProps {
        size?: FontTypes;
    }
}
