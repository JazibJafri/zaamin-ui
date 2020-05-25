import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { ThumbnailStyles } from './Thumbnail.styles';

/* Absolute Imports */
import { RegularText } from 'components/RegularText';
import { actions } from 'redux-store/user-preferences/actions';
import { Button } from 'components/Button';
import { globalStyles } from 'styles/app.styles';

interface OwnProps extends WithDispatch {
    language: string;
}

export const Thumbnail = ({ dispatch }: OwnProps) => (
    <View>
        <RegularText style={[globalStyles.centerContent, ThumbnailStyles.title]}>
            THUMBNAIL.TEXT.HELLO_WORLD
        </RegularText>
    </View>
);

const mapStateToProps = (state: RootState) => ({
    language: state.userPreferencesReducer.language,
});
const ThumbnailComponent = connect(mapStateToProps)(Thumbnail);

export { ThumbnailComponent as ThumbnailDecorated };
