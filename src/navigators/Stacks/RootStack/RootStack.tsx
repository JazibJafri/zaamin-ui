import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountType } from 'screens/AccountType';
import { AppUsage } from 'screens/AppUsage';
import { SignUpForm } from 'screens/SignUpForm';
import { LoginForm } from 'screens/LoginForm';
import { SPMap } from 'screens/SPMap';
import { Header } from 'components/Header';
import { transitionSpec, cardStyleInterpolator } from '../stack-styles';

const RootStack = createStackNavigator();

type Props = {
    isLoggedIn: boolean;
    didJustSignedUp: boolean;
};

const RootStackNavigator: React.FC<Props> = ({ isLoggedIn, didJustSignedUp }) => {
    const showSinglePrompts = isLoggedIn && didJustSignedUp;
    return (
        <RootStack.Navigator
            initialRouteName="LoginForm"
            screenOptions={{
                headerStyle: {
                    height: 50,
                },
            }}
        >
            {!showSinglePrompts ? (
                <>
                    <RootStack.Screen
                        name="LoginForm"
                        component={LoginForm}
                        options={{
                            headerShown: false,
                            transitionSpec: {
                                open: transitionSpec,
                                close: transitionSpec,
                            },
                            cardStyleInterpolator,
                        }}
                    />
                    <RootStack.Screen
                        name="SignUpForm"
                        component={SignUpForm}
                        options={{
                            headerShown: false,
                            transitionSpec: {
                                open: transitionSpec,
                                close: transitionSpec,
                            },
                            cardStyleInterpolator,
                        }}
                    />
                    <RootStack.Screen
                        name="AppUsage"
                        component={AppUsage}
                        options={{
                            headerTitle: () => <Header title="Select Account Type" />,
                            transitionSpec: {
                                open: transitionSpec,
                                close: transitionSpec,
                            },
                            cardStyleInterpolator,
                        }}
                    />
                    <RootStack.Screen
                        name="AccountType"
                        component={AccountType}
                        options={{
                            headerTitle: () => <Header title="Select Role Type" />,
                            transitionSpec: {
                                open: transitionSpec,
                                close: transitionSpec,
                            },
                            cardStyleInterpolator,
                        }}
                    />
                </>
            ) : (
                <RootStack.Screen
                    name="SPMap"
                    component={SPMap}
                    options={{
                        headerTitle: () => <Header title="Save your address" />,
                        transitionSpec: {
                            open: transitionSpec,
                            close: transitionSpec,
                        },
                        cardStyleInterpolator,
                    }}
                />
            )}
        </RootStack.Navigator>
    );
};

export { RootStackNavigator };
