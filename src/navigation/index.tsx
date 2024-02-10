import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawScreen from '../screens/draw';
import ResultScreen from '../screens/result';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Draw">
        <Stack.Screen
          name="Draw"
          component={DrawScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
