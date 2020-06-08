import React, { createContext, useState } from 'react';
import { fonts } from 'constants/fonts';

export const FontContext = createContext<{
    font: Font;
    fontSize: FontTypes;
    fontFamily: FontFamily;
}>({
    font: fonts.Oswald,
    fontSize: 'medium',
    fontFamily: 'REGULAR',
});

const FontContextProvider: React.FC = ({ children }) => {
    const [fontSize, setFontSize] = useState<FontTypes>('small');
    const [fontFamily, setFontFamily] = useState<FontFamily>('REGULAR');

    return (
        <FontContext.Provider value={{ font: fonts.Oswald, fontSize, fontFamily }}>
            {children}
        </FontContext.Provider>
    );
};

export { FontContextProvider };
