import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/app.styles';
import { colors, logoColors } from 'styles/constant.styles';

const { border, centerContent } = globalStyles;

export const SPMapContainerStyles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: logoColors.blue,
        elevation: 5,
    },
    searchView: {
        // ...border,
        marginHorizontal: 10,
        marginTop: 10,
    },
    mapSearchInput: {},
    mapView: {
        // ...border,
        height: 300,
    },
    map: {
        // ...border,
        margin: 10,
        width: 'auto',
        flexGrow: 1,
    },
    searchResults: {
        // ...border,
        // width: '100%',
        // height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    searchResultBackButton: {
        // ...border,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom: 5,
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: logoColors.orange,
    },
});

export const searchResultBackButton = {
    button: SPMapContainerStyles.searchResultBackButton,
};
