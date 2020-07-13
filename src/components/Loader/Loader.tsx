import React from 'react';
import { View, useWindowDimensions, StatusBar, Image } from 'react-native';
import { LoaderStyles } from './Loader.styles';
import { getScreenHeight } from 'util/helpers';
import { Images } from 'images';

const Loader: React.FC = () => {
    const window = useWindowDimensions();
    const statusBarHeight = StatusBar.currentHeight;
    const screenHeight = getScreenHeight(window, statusBarHeight);
    return (
        <View
            style={[
                LoaderStyles.container,
                { height: screenHeight, width: window.width },
            ]}
        >
            <View style={LoaderStyles.imageView}>
                <Image source={Images.loader} style={LoaderStyles.image} />
            </View>
        </View>
    );
};

export { Loader };
