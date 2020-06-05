import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const GreetingStyles = StyleSheet.create({
    container: {
        ...flexFullColumn,
        ...border,
    },
    imgView: {
        ...flexFullRow,
        backgroundColor: logoColors.orange,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    logoView: {
        ...border,
        ...flexFullColumn,
        ...centerContent,
        backgroundColor: logoColors.orange,
    },
    logoText: {
        color: logoColors.blue,
        fontSize: 30,
    },
    titleView: {
        ...flexFullColumn,
        ...centerContent,
        flex: 3,
        ...border,
    },
    welcomeText: {
        fontSize: 30,
    },
    signupText: {
        fontSize: 14,
    },
    buttonsView: {
        marginTop: 15,
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 6,
        ...border,
    },
    buttonStyle: {
        ...centerContent,
        width: 100,
        height: 60,
        backgroundColor: logoColors.blue,
        ...border,
    },
    buttonText: {
        fontSize: 16,
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
    title: GreetingStyles.buttonText,
    button: GreetingStyles.buttonStyle,
};

export const leftButton = {
    title: GreetingStyles.buttonText,
    button: { ...GreetingStyles.buttonStyle, ...GreetingStyles.leftButton },
};
export const rightButton = {
    title: GreetingStyles.buttonText,
    button: { ...GreetingStyles.buttonStyle, ...GreetingStyles.rightButton },
};
