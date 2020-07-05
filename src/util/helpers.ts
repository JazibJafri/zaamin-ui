import { ScaledSize } from 'react-native';

export const getScreenHeight = (window: ScaledSize, statusBarHeight?: number) => {
    if (statusBarHeight) {
        return window.height - statusBarHeight;
    }
    return window.height;
};
