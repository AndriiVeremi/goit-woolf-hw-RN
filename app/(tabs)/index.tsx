import React from 'react';
import { useFonts } from "expo-font";
import { View } from 'react-native';

import LoginScreen from '../../Screens/LoginScreen';

// import RegistrationScreen from '../../Screens/RegistrationScreen';
// import PostsScreen from '../../Screens/PostsScreen';

export default function HomeScreen() {

  const [loaded, error] = useFonts({
    "roboto-bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "roboto-medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded || error) {
    return null;
  }

  return (
    <View>
      <LoginScreen />
    </View>
  );
}
