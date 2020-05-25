import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/app.styles';
// import { colors } from "styles/constant.styles";

export const ThumbnailStyles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    button: {
        ...globalStyles.centerContent,
        borderWidth: 2,
        padding: 10,
        margin: 15,
    },
    buttonTitle: {
        fontSize: 15,
    },
});
