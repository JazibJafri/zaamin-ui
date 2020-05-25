import React from 'react';
import { Text, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/* Absolute imports */
import { HeaderStyles } from 'components/Header/Header.styles';
import { WrappedView } from 'components/Wrapped/WrappedView';

interface OwnProps {
    children: JSX.Element | string;
    openDrawer: () => void;
}

const Header = ({ children, openDrawer }: OwnProps) => (
    <WrappedView style={HeaderStyles.header}>
        <MaterialIcons
            name="menu"
            size={26}
            onPress={() => openDrawer()}
            style={HeaderStyles.icon}
        />
        <Text style={HeaderStyles.headerText}>{children}</Text>
        <TextInput style={HeaderStyles.searchField} placeholder="Search" />
    </WrappedView>
);

export { Header };
