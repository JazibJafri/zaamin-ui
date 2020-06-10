import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { FontContext } from 'contexts/FontContext';

const RegularText: React.FC<WithTextProps> = props => {
    const { style, children, size, ...rest } = props;
    const { font, fontSize, fontFamily } = useContext(FontContext);
    const textStyles = StyleSheet.create({
        text: {
            fontSize: font.size[size || fontSize],
            fontFamily: `${font.name}-${font.family[fontFamily]}`,
        },
    });
    return (
        <Text style={[textStyles.text, style]} {...rest}>
            {children}
        </Text>
    );
};

export { RegularText };
