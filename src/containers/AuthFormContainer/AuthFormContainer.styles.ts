import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const AuthFormStyles = StyleSheet.create({
    container: {
        ...flexFullColumn,
        // ...border,
    },
    imageView: {
        ...flexFullRow,
        // ...border,
        height: 70,
    },
    image: {
        flex: 1,
        height: undefined,
        resizeMode: 'contain',
    },
    heading: {
        ...centerContent,
        flex: 1,
        height: 70,
    },
    title: {
        color: logoColors.blue,
    },
    subText: {},
    socialButtons: {
        ...flexFullRow,
        // ...border,
        ...centerContent,
        height: 70,
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
    submitButton: {
        // ...border,
        ...flexFullColumn,
    },
    submitButtonStyle: {
        // ...border,
        ...centerContent,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: logoColors.blue,
        borderRadius: 30,
    },
    submitButtonText: {
        color: colors.white,
    },
    messageView: {
        ...flexFullRow,
        paddingHorizontal: 10,
    },
    messageButtonStyle: {
        marginLeft: 5,
    },
    messageButtonText: {
        color: logoColors.blue,
    },
});

export const messageButton = {
    button: AuthFormStyles.messageButtonStyle,
    title: AuthFormStyles.messageButtonText,
};

export const socialButtons = {
    title: AuthFormStyles.socialButtonText,
    button: AuthFormStyles.socialButtonStyle,
};

export const submitButton = {
    title: AuthFormStyles.submitButtonText,
    button: AuthFormStyles.submitButtonStyle,
};
