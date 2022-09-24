import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { LoginScreen } from '../../screens/loginScreen';
import { PostScreen } from '../../screens/postScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export const RootStack = () => {
    return (
        <>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }} >
                    <Screen
                        name='LoginScreen'
                        component={LoginScreen}
                    />
                    <Screen
                        name='PostScreen'
                        component={PostScreen}
                    />
                </Navigator>
            </NavigationContainer>
        </>
    )
}