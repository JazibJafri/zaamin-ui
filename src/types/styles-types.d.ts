import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

declare global {
    interface ButtonProps {
        onPress: () => unknown;
        title: string;
        styles?: {
            button?: ViewStyle;
            title?: TextStyle;
        };
    }
    type ButtonStyleType = Pick<ButtonProps, 'styles'>;
}
