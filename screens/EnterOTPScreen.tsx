import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import api from "../utils/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EnterOTPScreen = ({ route, navigation }: any) => {
  const { mobile } = route.params;
  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    try {
      // const response = await api.post("/verify-otp", { mobile, otp });
      // const { token } = response.data;

      // Store token in AsyncStorage
      // await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("token", "AuthToken");

      // Navigate to Home
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      console.error("OTP Verification Failed", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify" onPress={verifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { borderWidth: 1, padding: 10, width: "80%", marginVertical: 10 },
});

export default EnterOTPScreen;
