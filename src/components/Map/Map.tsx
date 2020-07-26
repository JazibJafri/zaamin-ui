import React from 'react';
import MapView, { MapViewProps } from 'react-native-maps';

type MapProps = MapViewProps;

const Map: React.FC<MapProps> = ({ style, region, ...rest }) => {
    return (
        <MapView
            style={style}
            showsUserLocation={true}
            showsMyLocationButton={false}
            region={region}
            {...rest}
        />
    );
};

export { Map };
