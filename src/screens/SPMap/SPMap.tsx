import React, { useState, useEffect, useRef } from 'react';
import {
    PermissionsAndroid,
    PermissionStatus,
    Animated,
    useWindowDimensions,
} from 'react-native';
import { useSelector } from 'react-redux';
import { SinglePrompt } from 'components/SinglePrompt';
import { Region } from 'react-native-maps';
import { useAppDispatch } from 'redux-store';
import { applicationActions } from 'redux-store/application';
import Geolocation from 'react-native-geolocation-service';
import * as Text from 'constants/text';
import { AppUsageOptions, AccountTypes } from 'constants/app';
import { SPMapContainer } from 'containers/SPMapContainer';

type PermissionResults = PermissionStatus | 'to_be_requested';

const SPMap = () => {
    const { width } = useWindowDimensions();
    const { appUsage, accountType } = useSelector(
        (state: RootState) => state.userReducer,
    );

    const [locationPermission, setLocationPermission] = useState<PermissionResults>(
        'to_be_requested',
    );
    const [searchValue, setSearchValue] = useState('');
    const [region, setRegion] = useState<Region>({
        latitude: 24.847432,
        longitude: 67.025264,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002,
    });
    const dispatch = useAppDispatch();

    const animatedValue = new Animated.Value(0);
    const animatedValueRef = useRef(animatedValue);
    const translateX = animatedValueRef.current.interpolate({
        inputRange: [0, 1],
        outputRange: [width, 0],
    });

    const showSearchResults = () => {
        Animated.spring(animatedValueRef.current, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const hideSearchResults = () => {
        Animated.spring(animatedValueRef.current, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    const showMessage = (message: ErrorMessage) => {
        dispatch(
            applicationActions.toggleErrorMessage({
                show: message.show,
                title: message.title,
                content: message.content,
                onClose: message.onClose,
            }),
        );
    };

    const requestLocationPermission = async () => {
        try {
            const permissionStatus = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            setLocationPermission(permissionStatus);
        } catch (err) {
            showMessage({
                show: true,
                title: Text.UNABLE_TO_GET_LOCATION,
                content: Text.ERROR_LOCATION_PERMISSIONS,
            });
        }
    };

    const handleLocationGranted = () => {
        Geolocation.getCurrentPosition(
            position => {
                setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            },
            error => {
                showMessage({
                    show: true,
                    title: Text.UNABLE_TO_GET_LOCATION,
                    content: Text.MAKE_SURE_LOCATION_IS_ON,
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                showLocationDialog: true,
                forceRequestLocation: true,
            },
        );
    };

    const handleLocationDenied = () => {
        const isPicnicUsage = appUsage === AppUsageOptions.PICNIC;
        const isTransporter = !isPicnicUsage && accountType === AccountTypes.TRANSPORTER;
        if (isPicnicUsage || isTransporter) {
            showMessage({
                show: true,
                title: Text.LOCATION_IS_NECESSARY,
                content: Text.LOCATION_IS_REQUIRED,
                onClose: 'exit-app',
            });
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        if (locationPermission === 'granted') {
            handleLocationGranted();
        } else if (
            locationPermission === 'denied' ||
            locationPermission === 'never_ask_again'
        ) {
            handleLocationDenied();
        }
    }, [locationPermission]);

    return (
        <SinglePrompt>
            <SPMapContainer
                hideSearchResults={hideSearchResults}
                region={region}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                showSearchResults={showSearchResults}
                translateX={translateX}
            />
        </SinglePrompt>
    );
};

export { SPMap };
