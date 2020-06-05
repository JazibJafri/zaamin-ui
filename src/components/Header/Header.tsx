import React from 'react';
import { Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { HeaderStyles } from './Header.styles';

interface OwnProps {
    openDrawer: () => void;
}

const Header: React.FC<OwnProps> = ({ children, openDrawer }) => (
    <View style={HeaderStyles.header}>
        <MaterialIcons
            name="menu"
            size={26}
            onPress={() => openDrawer()}
            style={HeaderStyles.icon}
        />
        <Text style={HeaderStyles.headerText}>{children}</Text>
        <TextInput style={HeaderStyles.searchField} placeholder="Search" />
    </View>
);

export { Header };
