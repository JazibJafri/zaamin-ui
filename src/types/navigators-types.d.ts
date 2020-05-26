import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';

declare global {
    type WithDrawerNavigation<
        Screen extends keyof Params = string,
        Params extends ParamListBase = {}
    > = DrawerScreenProps<Params, Screen>;

    type WithTabNavigation<
        Screen extends keyof Params = string,
        Params extends ParamListBase = {}
    > = BottomTabScreenProps<Params, Screen>;
}
