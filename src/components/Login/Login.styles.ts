import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const LoginStyles = StyleSheet.create({
    container: {
        ...flexFullColumn,
        // ...border,
    },
    imageView: {
        ...flexFullRow,
        // ...border,
    },
    image: {
        flex: 1,
        height: undefined,
        resizeMode: 'contain',
    },
    heading: {
        flex: 1,
        ...centerContent,
    },
    title: {
        color: logoColors.blue,
    },
    subText: {},
    socialButtons: {
        ...flexFullRow,
        // ...border,
        ...centerContent,
    },
    socialButtonStyle: {
        // ...border,
        ...flexFullRow,
        ...centerContent,
        height: 40,
        marginHorizontal: 10,
        backgroundColor: logoColors.orange,
        borderRadius: 30,
    },
    socialButtonText: {
        fontSize: 17,
        color: colors.black,
    },
    orText: {
        ...centerContent,
    },
    form: {
        // ...border,
        flex: 4,
    },
    input: {
        marginTop: 15,
        marginHorizontal: 10,
        paddingLeft: 10,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: logoColors.blue,
        borderRadius: 5,
    },
    loginButton: {
        // ...border,
        ...flexFullRow,
        alignItems: 'flex-start',
    },
    loginButtonStyle: {
        // ...border,
        ...flexFullRow,
        ...centerContent,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: logoColors.blue,
        borderRadius: 30,
    },
    loginButtonText: {
        color: colors.white,
    },
});

export const socialButtons = {
    title: LoginStyles.socialButtonText,
    button: LoginStyles.socialButtonStyle,
};

export const loginButton = {
    title: LoginStyles.loginButtonText,
    button: LoginStyles.loginButtonStyle,
};
