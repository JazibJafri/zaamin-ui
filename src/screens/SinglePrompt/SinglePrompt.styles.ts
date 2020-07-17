import { StyleSheet } from 'react-native';
import { colors, logoColors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent } = globalStyles;

export const SinglePromptStyles = StyleSheet.create({
    container: {
        // ...border,
        flex: 1,
    },
    topHalfView: {
        // ...border,
        flex: 2,
    },
    topHalfViewContent: {
        // ...border,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    bottomHalfView: {
        // ...border,
        flex: 1,
        justifyContent: 'center',
    },
    bottomHalfButtonsView: {
        // ...border,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    leftButtonStyle: {
        // ...border,
        ...centerContent,
        width: 80,
        height: 40,
        backgroundColor: colors.grey,
        elevation: 5,
    },
    leftButtonText: {},
    rightButtonStyle: {
        // ...border,
        ...centerContent,
        width: 80,
        height: 40,
        backgroundColor: logoColors.orange,
        elevation: 5,
    },
    rightButtonText: {},
});

export const leftButton = {
    title: SinglePromptStyles.leftButtonText,
    button: SinglePromptStyles.leftButtonStyle,
};

export const rightButton = {
    title: SinglePromptStyles.rightButtonText,
    button: SinglePromptStyles.rightButtonStyle,
};
