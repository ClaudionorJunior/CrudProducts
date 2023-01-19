import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '~/screens/Login';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;
