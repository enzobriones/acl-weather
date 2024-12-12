import React from "react";
import { Stack } from "expo-router";

const StationsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Estaciones meteorológicas", headerShown: false }}
      />
      <Stack.Screen
        name="los-angeles/index"
        options={{ title: "Los Ángeles" }}
      />
      <Stack.Screen name="el-rosal/index" options={{ title: "El Rosal" }} />
      <Stack.Screen
        name="bocatoma/index"
        options={{ title: "Bocatoma Tucapel" }}
      />
    </Stack>
  );
};

export default StationsLayout;
