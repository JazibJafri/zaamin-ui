import React, { useState, useEffect } from 'react';
import { View, Text, PermissionsAndroid, PermissionStatus } from 'react-native';
import { useSelector } from 'react-redux';
import { SPMapStyles } from './SPMap.styles';
import { SinglePrompt } from 'screens/SinglePrompt';
import MapView from 'react-native-maps';
import { useAppDispatch } from 'redux-store';
import { applicationActions } from 'redux-store/application';
import {
    UNABLE_TO_GET_LOCATION,
    ERROR_LOCATION_PERMISSIONS,
    LOCATION_IS_NECESSARY,
    LOCATION_IS_REQUIRED,
} from 'constants/text';
import { AppUsageOptions, AccountTypes } from 'constants/app';

type PermissionResults = PermissionStatus | 'to_be_requested';

const SPMap = () => {
    const { appUsage, accountType } = useSelector(
        (state: RootState) => state.userReducer,
    );
    const [locationPermission, setLocationPermission] = useState<PermissionResults>(
        'to_be_requested',
    );
    const dispatch = useAppDispatch();

    const requestLocationPermission = async () => {
        try {
            const permissionStatus = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            //ToDo: prevent state update on unmounted component
            setLocationPermission(permissionStatus);
        } catch (err) {
            dispatch(
                applicationActions.toggleErrorMessage({
                    show: true,
                    title: UNABLE_TO_GET_LOCATION,
                    content: ERROR_LOCATION_PERMISSIONS,
                }),
            );
        }
    };
    const handleLocationGranted = () => {
        null;
    };
    const handleLocationDenied = () => {
        const isPicnicUsage = appUsage === AppUsageOptions.PICNIC;
        const isTransporter = !isPicnicUsage && accountType === AccountTypes.TRANSPORTER;
        if (isPicnicUsage || isTransporter) {
            dispatch(
                applicationActions.toggleErrorMessage({
                    show: true,
                    title: LOCATION_IS_NECESSARY,
                    content: LOCATION_IS_REQUIRED,
                    onClose: 'exit-app',
                }),
            );
        }
    };
    const handleLocationBlocked = () => {
        null;
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        if (locationPermission === 'granted') {
            handleLocationGranted();
        } else if (locationPermission === 'denied') {
            handleLocationDenied();
        } else if (locationPermission === 'never_ask_again') {
            handleLocationBlocked();
        }
    }, [locationPermission]);

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
