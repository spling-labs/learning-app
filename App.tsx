import React from 'react';
import { View,  } from 'react-native';

//SCREENS
import { SCREENS } from './src/screens';

//CONTEXT
import { LocalizationProvider } from './src/context/LocalizationProvider';

//PACKAGES
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import _ from 'lodash';

const { Navigator, Screen } = createStackNavigator();

export default function App(props: any) {
  return (
    <View style={{ flex: 1.0 }}>
      <LocalizationProvider>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}
            initialRouteName={SCREENS.Splash.name}>
            {_.toArray(SCREENS).map((item: any, index: number) => {
              return item.component ? (
                <Screen
                  key={item.name}
                  name={item.name}
                  component={item.component}
                />
              ) : null;
            })}
          </Navigator>
        </NavigationContainer>
      </LocalizationProvider>
    </View>
  )
}


