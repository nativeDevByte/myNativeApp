import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabScreen = ({ title }: { title: string }) => (
  <View style={styles.screen}>
    <Text>{title}</Text>
  </View>
);

// Main HomeScreen with Tabs
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#f8f8f8" },
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#7f8c8d",
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={() => <TabScreen title="Tab 1" />}
        options={{
          tabBarLabel: "Tab 1",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={() => <TabScreen title="Tab 2" />}
        options={{
          tabBarLabel: "Tab 2",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={() => <TabScreen title="Tab 3" />}
        options={{
          tabBarLabel: "Tab 3",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={() => <TabScreen title="Tab 4" />}
        options={{
          tabBarLabel: "Tab 4",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeScreen;
