import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux-store';
import { View, useWindowDimensions, StatusBar } from 'react-native';
import { getScreenHeight } from 'util/helpers';
import { MessageStyles, messageViewButton } from './Message.styles';
import { RegularText } from 'components/RegularText';
import { OKAY } from 'constants/text';
import { Button } from 'components/Button';
import { applicationActions } from 'redux-store/application';

const Message: React.FC = () => {
    const { title, content } = useSelector(
        (state: RootState) => state.applicationReducer.error,
    );
    const dispatch = useAppDispatch();
    const window = useWindowDimensions();
    const { width } = window;
    const statusBarHeight = StatusBar.currentHeight;
    const screenHeight = getScreenHeight(window, statusBarHeight);
    const { toggleErrorMessage } = applicationActions;
    return (
        <View style={[MessageStyles.container, { height: screenHeight, width }]}>
            <View
                style={[
                    MessageStyles.messageView,
                    {
                        minHeight: screenHeight / 3,
                        maxHeight: screenHeight / 1.1,
                        maxWidth: width / 1.2,
                        minWidth: width / 1.2,
                    },
                ]}
            >
                <View style={MessageStyles.messageHeader}>
                    <RegularText size="large">{title}</RegularText>
                </View>
                <View style={MessageStyles.messageContent}>
                    <RegularText size="medium">{content}</RegularText>
                </View>
                <View style={MessageStyles.messageViewButton}>
                    <Button
                        title={OKAY}
                        onPress={() =>
                            dispatch(
                                toggleErrorMessage({
                                    show: false,
                                    content: '',
                                    title: '',
                                }),
                            )
                        }
                        buttonStyle={messageViewButton}
                    />
                </View>
            </View>
        </View>
    );
};

export { Message };
