import React from 'react';
import { View, useWindowDimensions, StatusBar } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { SinglePromptStyles, leftButton, rightButton } from './SinglePrompt.styles';
import { getScreenHeight } from 'util/helpers';
import { Button } from 'components/Button';

interface Props {
    onSkipPress?: () => unknown;
    onNextPress?: () => unknown;
}

const SinglePrompt: React.FC<Props> = ({
    children,
    onNextPress = () => null,
    onSkipPress = () => null,
}) => {
    const window = useWindowDimensions();
    const { width } = window;
    const statusBarHeight = StatusBar.currentHeight;
    const screenHeight = getScreenHeight(window, statusBarHeight);
    const headerHeight = useHeaderHeight();
    return (
        <View
            style={[
                SinglePromptStyles.container,
                { minHeight: screenHeight - headerHeight, width },
            ]}
        >
            <View style={SinglePromptStyles.topHalfView}>
                <View style={SinglePromptStyles.topHalfViewContent}>{children}</View>
            </View>
            <View style={SinglePromptStyles.bottomHalfView}>
                <View style={SinglePromptStyles.bottomHalfButtonsView}>
                    <Button title="Skip" onPress={onSkipPress} buttonStyle={leftButton} />
                    <Button
                        title="Next"
                        onPress={onNextPress}
                        buttonStyle={rightButton}
                    />
                </View>
            </View>
        </View>
    );
};

export { SinglePrompt };
