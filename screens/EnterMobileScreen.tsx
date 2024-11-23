import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const EnterMobileScreen = ({ navigation }: any) => {
  const [mobile, setMobile] = useState("");

  const handleNext = () => {
    // Make API call to send the mobile number to the backend
    // const response = await api.post("/send-otp", { mobile});
    navigation.navigate("EnterOTP", { mobile });
  };

  return (
    <View style={styles.container}>
      <Text>Enter Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { borderWidth: 1, padding: 10, width: "80%", marginVertical: 10 },
});

export default EnterMobileScreen;
