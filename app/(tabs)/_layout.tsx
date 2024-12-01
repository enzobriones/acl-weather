import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={25}
            />
          ),
          title: 'Inicio'
        }}
      />
      <Tabs.Screen
        name="stations/(stack)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="rainy-outline"
              color={color}
              size={25}
              />
          ),
          title: 'Estaciones'
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
