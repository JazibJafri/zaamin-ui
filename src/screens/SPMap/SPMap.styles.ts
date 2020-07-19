import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent } = globalStyles;

export const SPMapStyles = StyleSheet.create({
    container: {
        // ...border,
    },
    mapView: {
        // ...border,
        width: 'auto',
        height: 200,
    },
});
