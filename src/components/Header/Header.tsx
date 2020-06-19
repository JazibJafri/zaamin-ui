import React from 'react';
import { View } from 'react-native';

import { HeaderStyles } from './Header.styles';
import { RegularText } from 'components/RegularText';

interface OwnProps {
    title?: string;
}

const Header: React.FC<OwnProps> = ({ title }) => (
    <View style={HeaderStyles.header}>
        <RegularText size="large" style={HeaderStyles.headerText}>
            {title}
        </RegularText>
    </View>
);

export { Header };
