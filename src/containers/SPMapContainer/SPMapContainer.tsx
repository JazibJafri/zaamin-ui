import React from 'react';
import { View, Animated } from 'react-native';
import { SPMapContainerStyles, searchResultBackButton } from './SPMapContainer.styles';
import { RegularInput } from 'components/RegularInput';
import { Map } from 'components/Map';
import { Button } from 'components/Button';
import { RegularText } from 'components/RegularText';
import { Region } from 'react-native-maps';

interface Props {
    showSearchResults: () => void;
    hideSearchResults: () => void;
    searchValue: string;
    setSearchValue: (val: string) => void;
    region: Region;
    translateX: Animated.AnimatedInterpolation;
}

const SPMapContainer: React.FC<Props> = props => {
    return (
        <View style={SPMapContainerStyles.container}>
            <View style={SPMapContainerStyles.searchView}>
                <RegularInput
                    onChangeText={val => props.setSearchValue(val)}
                    onKeyPress={props.showSearchResults}
                    value={props.searchValue}
                    style={SPMapContainerStyles.mapSearchInput}
                    placeholder="Search"
                />
            </View>
            <View style={SPMapContainerStyles.mapView}>
                <Map style={SPMapContainerStyles.map} region={props.region} />
                <Animated.View
                    style={[
                        SPMapContainerStyles.searchResults,
                        { transform: [{ translateX: props.translateX }] },
                    ]}
                >
                    <Button
                        icon={{ name: 'arrow-back', size: 20 }}
                        buttonStyle={searchResultBackButton}
                        onPress={() => props.hideSearchResults()}
                    />
                    <RegularText>Type to search places</RegularText>
                </Animated.View>
            </View>
        </View>
    );
};

export { SPMapContainer };
