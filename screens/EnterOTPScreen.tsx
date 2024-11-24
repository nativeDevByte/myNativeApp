import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EnterOTPScreen = ({ route, navigation }: any) => {
  const { mobileNumber } = route.params;
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = useRef<TextInput[]>([]); // To store references for OTP inputs
  const [timer, setTimer] = useState(59); // Countdown timer
  const [canResend, setCanResend] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown); // Cleanup on unmount
    } else {
      setCanResend(true); // Allow OTP resend when timer hits 0
    }
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus the next input box if the user types a number
    if (text && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP...");
    // Simulate OTP resend API call
    setTimer(59); // Reset the timer
    setCanResend(false); // Disable resend until timer finishes
  };

  const verifyOTP = async () => {
    try {
      const enteredOtp = otp.join("");
      console.log(`Verifying OTP: ${enteredOtp}`);

      // Simulate storing a token
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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.containerTop}>
          <Text style={styles.heading}>Verify OTP</Text>
          <Text style={styles.subheading}>
            Enter the 4-digit OTP sent to your mobile number
          </Text>
          <Text style={styles.mobileText}>+91 {mobileNumber}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.containerBottom}>
          <View style={styles.inputContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (refs.current[index] = el!)} // Store input reference
                style={styles.inputBox}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={verifyOTP}>
            <Text style={styles.buttonText}>VERIFY</Text>
          </TouchableOpacity>

          <Text style={styles.resendText}>
            Didn't receive an OTP?{" "}
            {canResend ? (
              <Text style={styles.link} onPress={handleResendOTP}>
                Resend OTP
              </Text>
            ) : (
              `Resend OTP in 0:${timer < 10 ? `0${timer}` : timer}`
            )}
          </Text>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  mobileText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  containerBottom: {
    flex: 1,
    backgroundColor: "#000",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 5,
    color: "#000",
    backgroundColor: "#fff",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  resendText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
  },
});

export default EnterOTPScreen;
