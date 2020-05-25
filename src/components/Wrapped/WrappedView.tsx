import React, { Component } from 'react';
import { ViewProps, View, StyleProp, ViewStyle } from 'react-native';

interface Props extends ViewProps {
    style?: StyleProp<ViewStyle>;
}

//same as react-native view, can be used to add functionality later
class WrappedView extends Component<Props> {
    render() {
        const { style: attrStyles, children, ...rest } = this.props;
        const style = [attrStyles];

        /* const methods = {}; */
        /* let propStyles: ViewStyle = {};
        style.push(propStyles); */
        return (
            <View style={style} {...rest} {...this.state} /*  {...methods} */>
                {children}
            </View>
        );
    }
}

export { WrappedView };
