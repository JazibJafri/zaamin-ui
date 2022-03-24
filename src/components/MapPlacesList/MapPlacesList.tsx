import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'components/Button';
import { MapPlacesListStyles, listItemButton } from './MapPlacesList.styles';

type FlatListItem = {
    id: string;
    title: string;
};

const MapPlacesList = () => {
    const DATA: FlatListItem[] = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First place',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d721',
            title: 'Fourth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d722',
            title: 'Fifth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d723',
            title: 'Sixth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d724',
            title: 'Seventh place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d725',
            title: 'Eighth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d726',
            title: 'Ninth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d77',
            title: 'Tenth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d728',
            title: 'Eleventh place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d720',
            title: 'Twelveth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d721w23',
            title: 'Thirteenth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d724212r',
            title: 'Fourteenth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7231',
            title: 'Fifteenth place',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72f2',
            title: 'Sixteenth place',
        },
    ];

    const renderItem = ({ item }: { item: FlatListItem }) => {
        return (
            <Button
                title={item.title}
                onPress={() => null}
                buttonStyle={listItemButton}
            />
        );
    };
    return (
        <>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
};

export { MapPlacesList };
