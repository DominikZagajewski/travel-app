import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { DarkModeProvider, useDarkMode } from "@/app/DarkModeContext";

const Layout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkMode ? Colors.black : Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDarkMode ? Colors.white : Colors.black,
        tabBarInactiveTintColor: isDarkMode ? "#666" : "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const AppLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DarkModeProvider>
        <Layout />
      </DarkModeProvider>
    </GestureHandlerRootView>
  );
};

export default AppLayout;
