import { DrawerScreenProps } from '@react-navigation/drawer';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
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

    type RootStackParamList = {
        AppUsage: undefined;
        Greeting: undefined;
        Login: undefined;
    };

    type WithStackNavigation<
        Screen extends keyof RootStackParamList
    > = RootStackNavigation<Screen, RootStackParamList>;

    type RootStackNavigation<
        Screen extends keyof Params = string,
        Params extends ParamListBase = {}
    > = StackScreenProps<Params, Screen>;
}
