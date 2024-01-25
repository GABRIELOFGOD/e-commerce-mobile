import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './navigator/TabNavigator'
let customFonts = {
  'Poppins': require('./assets/fonts/Poppins-Regular.ttf')
};

const App = () => {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App