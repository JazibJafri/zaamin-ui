import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/app.styles';
import { colors, logoColors } from 'styles/constant.styles';

const { border, centerContent } = globalStyles;

export const MapPlacesListStyles = StyleSheet.create({
    listItemButton: {
        // ...border,
        marginHorizontal: 3,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: logoColors.blue,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
});

export const listItemButton = {
    button: MapPlacesListStyles.listItemButton,
};
