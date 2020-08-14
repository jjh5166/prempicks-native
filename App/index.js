import React from 'react';
import { AppLoading } from "expo";
import {
  useFonts,
  Kanit_400Regular,
  Kanit_400Regular_Italic
} from "@expo-google-fonts/kanit";

import Home from './screens/Home';

export default () => {
  let [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_400Regular_Italic
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Home />
    );
  }
};