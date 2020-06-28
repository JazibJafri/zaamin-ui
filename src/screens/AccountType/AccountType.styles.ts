import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const AccountTypeStyles = StyleSheet.create({
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
    title: AccountTypeStyles.buttonText,
    button: AccountTypeStyles.buttonStyle,
};

export const leftButton = {
    title: AccountTypeStyles.buttonText,
    button: { ...AccountTypeStyles.buttonStyle, ...AccountTypeStyles.leftButton },
};
export const rightButton = {
    title: AccountTypeStyles.buttonText,
    button: { ...AccountTypeStyles.buttonStyle, ...AccountTypeStyles.rightButton },
};
