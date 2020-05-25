import { StyleSheet } from 'react-native';

export const HeaderStyles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    headerText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        left: 10,
        width: '30%',
    },
    searchField: {
        borderWidth: 1,
        borderColor: '#cccccc',
        right: 10,
        width: '60%',
        height: '55%',
        fontSize: 12,
        color: '#000000',
        backgroundColor: '#eeeeee',
    },
    icon: {
        width: '10%',
        left: 10,
    },
});
