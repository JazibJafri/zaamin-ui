import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const LoginFormStyles = StyleSheet.create({
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
        marginHorizontal: 40,
        height: 30,
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
    formContainer: {
        // ...border,
        flex: 1,
    },
    form: {
        // ...border,
        flex: 4,
    },
    input: {
        marginTop: 15,
        marginHorizontal: 40,
        paddingLeft: 10,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: logoColors.blue,
        borderRadius: 5,
    },
    submitButton: {
        // ...border,
        flex: 1,
    },
    submitButtonView: {
        // ...border,
        // flex: 1,
    },
    submitButtonStyle: {
        // ...border,
        ...centerContent,
        height: 40,
        marginHorizontal: 40,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: logoColors.blue,
        borderRadius: 30,
    },
    submitButtonText: {
        color: colors.white,
    },
    messageView: {
        // ...border,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 40,
    },
    messageButtonStyle: {
        marginLeft: 5,
    },
    messageButtonText: {
        color: logoColors.blue,
    },
});

export const messageButton = {
    button: LoginFormStyles.messageButtonStyle,
    title: LoginFormStyles.messageButtonText,
};

export const socialButtons = {
    title: LoginFormStyles.socialButtonText,
    button: LoginFormStyles.socialButtonStyle,
};

export const submitButton = {
    title: LoginFormStyles.submitButtonText,
    button: LoginFormStyles.submitButtonStyle,
};
