import { StyleSheet } from 'react-native';
import { colors } from './constant.styles';

export const globalStyles = StyleSheet.create({
    centerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    flexFullRow: {
        flex: 1,
        flexDirection: 'row',
    },
    leftHalfScreen: {
        alignSelf: 'flex-start',
        width: '50%',
    },
    rightHalfScreen: {
        alignSelf: 'flex-end',
        width: '50%',
    },
    defaultButton: {
        alignSelf: 'center',
        borderWidth: 1,
        backgroundColor: colors.grey,
        padding: '2%',
    },
    defaultButtonTitle: {
        fontSize: 13,
    },
});
