import React from 'react';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from '~/hooks/ContextProvider';
import { LoadingScreen } from '~/components/LoadingScreen';
import MainStack from '~/navigations';

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <ContextProvider>
        <MainStack />
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
