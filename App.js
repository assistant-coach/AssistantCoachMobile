import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import {HomeDesktop} from "./desktop/Pages/HomeDesktop";
import {HomeMobile} from "./mobile/Pages/HomeMobile";
import {ConnectionDesktop} from "./desktop/Pages/ConnectionDesktop";
import {ConnectionMobile} from "./mobile/Pages/ConnectionMobile";

export default function App() {

  const Stack = createNativeStackNavigator();

    if (Platform.OS === 'web') {
      return (

          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeDesktop} options={{headerShown : false, animation:'none'}} />
                <Stack.Screen name="Connection" component={ConnectionDesktop} options={{headerShown : false, animation:'none'}} />
            </Stack.Navigator>
            <StatusBar style={"auto"} translucent={true}  />
          </NavigationContainer>

      );
    }else{
        return (

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeMobile} options={{headerShown : false, animation:'none'}} />
                    <Stack.Screen name="Connection" component={ConnectionMobile} options={{headerShown : false, animation:'none'}} />
                </Stack.Navigator>
                <StatusBar style={"auto"} translucent={true}  />
            </NavigationContainer>

        );
    }
}
