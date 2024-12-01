import React, { useEffect } from "react";

import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import "../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Kanit-Black": require("../assets/fonts/Kanit-Black.ttf"),
    "Kanit-Light": require("../assets/fonts/Kanit-Light.ttf"),
    "Kanit-Regular": require("../assets/fonts/Kanit-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
