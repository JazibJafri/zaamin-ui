import { StyleSheet } from 'react-native';
import { colors, logoColors } from 'styles/constant.styles';
import { globalStyles } from 'styles/app.styles';

const { border, centerContent } = globalStyles;

export const MessageStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageView: {
        backgroundColor: colors.white,
        borderColor: logoColors.blue,
        borderWidth: 0.5,
        elevation: 30,
    },
    messageHeader: {
        // ...border,
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 12,
        height: 40,
        borderBottomWidth: 0.5,
        borderBottomColor: logoColors.blue,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    messageContent: {
        // ...border,
        ...centerContent,
        flexGrow: 1,
        padding: 5,
    },
    messageViewButton: {
        // ...border,
        flexDirection: 'row',
        padding: 5,
        paddingRight: 15,
        justifyContent: 'flex-end',
        height: 50,
        borderTopWidth: 0.5,
        borderTopColor: logoColors.blue,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    messageViewButtonStyle: {
        ...centerContent,
        width: 70,
        borderWidth: 0.5,
        borderColor: logoColors.blue,
        backgroundColor: logoColors.orange,
    },
    messageViewButtonText: {},
});

export const messageViewButton = {
    button: MessageStyles.messageViewButtonStyle,
    title: MessageStyles.messageViewButtonText,
};
