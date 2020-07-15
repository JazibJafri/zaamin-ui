import { StyleSheet } from 'react-native';
import { colors } from 'styles/constant.styles';

export const LoaderStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        opacity: 0.5,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        margin: 110,
    },
    image: {
        flex: 1,
        height: undefined,
        resizeMode: 'contain',
    },
});
