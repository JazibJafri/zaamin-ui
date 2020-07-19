import React from 'react';
import { View, Text } from 'react-native';
import { SPMapStyles } from './SPMap.styles';
import { SinglePrompt } from 'screens/SinglePrompt';
import MapView from 'react-native-maps';

const SPMap = () => {
    return (
        <SinglePrompt>
            <View style={SPMapStyles.container}>
                <MapView
                    style={SPMapStyles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </SinglePrompt>
    );
};

export { SPMap };
