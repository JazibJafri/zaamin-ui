import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const WelcomeStyles = StyleSheet.create({
    container: {
        ...flexFullColumn,
    },
    titleView: {
        ...flexFullColumn,
        ...centerContent,
    },
    signupText: {
        fontFamily: 'Oswald-ExtraLight',
    },
    buttonsView: {
        ...flexFullRow,
        justifyContent: 'center',
    },
    buttonStyle: {
        ...centerContent,
        width: 100,
        height: 60,
        backgroundColor: logoColors.blue,
    },
    buttonText: {
        color: colors.white,
    },
    leftButton: {
        borderRightColor: logoColors.orange,
        borderRightWidth: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    rightButton: {
        borderLeftColor: logoColors.orange,
        borderLeftWidth: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
});

export const middleButton = {
    title: WelcomeStyles.buttonText,
    button: WelcomeStyles.buttonStyle,
};

export const leftButton = {
    title: WelcomeStyles.buttonText,
    button: { ...WelcomeStyles.buttonStyle, ...WelcomeStyles.leftButton },
};
export const rightButton = {
    title: WelcomeStyles.buttonText,
    button: { ...WelcomeStyles.buttonStyle, ...WelcomeStyles.rightButton },
};
