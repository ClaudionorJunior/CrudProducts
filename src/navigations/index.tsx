import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '~/screens/Login';
import CreateAccount from '~/screens/CreateAccount';
import { RootStackParamList } from './@types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default MainStack;
