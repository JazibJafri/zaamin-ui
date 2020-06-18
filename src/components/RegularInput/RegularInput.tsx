import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { globalStyles } from 'styles/app.styles';

const RegularInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
    return <TextInput {...rest} style={[globalStyles.defaultInput, style]} />;
};

export { RegularInput };
