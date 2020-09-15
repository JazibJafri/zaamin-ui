import React from 'react';
import MapView, { MapViewProps, MapEvent } from 'react-native-maps';

type MapProps = MapViewProps;

const Map: React.FC<MapProps> = ({ style, region, ...rest }) => {
    const handleMapPress = (event: MapEvent) => {
        console.log('Event', event.nativeEvent);
    };

    return (
        <MapView
            style={style}
            showsUserLocation={true}
            showsMyLocationButton={false}
            region={region}
            onPress={handleMapPress}
            {...rest}
        />
    );
};

export { Map };
