import { StyleSheet } from 'react-native';
import { logoColors, colors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent, flexFullColumn, flexFullRow } = globalStyles;

export const AppUsageStyles = StyleSheet.create({
    container: {
        ...flexFullColumn,
    },
    imageView: {
        ...flexFullRow,
        alignItems: 'flex-end',
        paddingHorizontal: 40,
        paddingBottom: 10,
        // ...border,
    },
    image: {
        flex: 1,
        height: 120,
        // ...border,
    },
    buttonView: {
        flex: 1,
        // ...border,
        paddingTop: 10,
        paddingHorizontal: 40,
    },
    buttonStyle: {
        // ...border,
        ...centerContent,
        flexDirection: 'row',
        height: 50,
        marginBottom: 15,
        backgroundColor: logoColors.blue,
        borderRadius: 25,
    },
    buttonText: {
        // ...border,
        marginBottom: 5,
        color: logoColors.orange,
    },
    icon: {
        // ...border,
        marginVertical: 5,
    },
});

export const buttons = {
    title: AppUsageStyles.buttonText,
    button: AppUsageStyles.buttonStyle,
};
