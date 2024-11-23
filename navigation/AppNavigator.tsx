import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EnterMobileScreen from "../screens/EnterMobileScreen";
import EnterOTPScreen from "../screens/EnterOTPScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="EnterMobile">
      <Stack.Screen name="EnterMobile" component={EnterMobileScreen} />
      <Stack.Screen name="EnterOTP" component={EnterOTPScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
