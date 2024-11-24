import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView,
  Modal,
  ScrollView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";

const EnterMobileScreen = ({ navigation }: any) => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleNext = () => {
    // Make API call to send the mobile number to the backend
    // const response = await api.post("/send-otp", { mobile});
    navigation.navigate("EnterOTP", { mobileNumber });
  };

  const [showModal, setShowModal] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onContinueClick = () => {
    if (mobileNumber.length != 10) {
      Alert.alert("Please enter a valid mobile number");
    } else {
      // Make API call to send the mobile number to the backend
      // const response = await api.post("/send-otp", { mobile});
      navigation.navigate("EnterOTP", { mobileNumber });
    }
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <SafeAreaView style={styles.containerTop}>
            <View style={styles.icon_text}>
              {/* <Image
                source={require("../assets/logo-black.png")}
                style={styles.icon}
              ></Image> */}
              <Text style={styles.heading}>MITHRA</Text>
            </View>
            <Text style={styles.subheading}>
              One stop solution for all subscriptions
            </Text>
          </SafeAreaView>
          <SafeAreaView style={styles.containerBottom}>
            <Text style={styles.title}>
              Get what you need, when you need it, straight from local vendors.
            </Text>
            <Text numberOfLines={1}>
              <Text style={styles.strong}>LOGIN</Text>
              <Text style={styles.normal}> Or </Text>
              <Text style={styles.strong}>SIGN UP</Text>
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.prefix}>+91</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={onContinueClick}>
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
              By continuing, you agree to our{" "}
              <Text style={styles.link} onPress={openModal}>
                Terms & Conditions
              </Text>
            </Text>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {/* Modal for Terms & Conditions */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Terms & Conditions</Text>
            <ScrollView style={styles.modalContent}>
              <Text style={styles.modalText}>
                1. Your use of this app is governed by these Terms and
                Conditions.
              </Text>
              <Text style={styles.modalText}>
                2. All subscriptions are subject to availability and vendor
                terms.
              </Text>
              <Text style={styles.modalText}>
                3. The app does not guarantee the accuracy of vendor listings.
              </Text>
              <Text style={styles.modalText}>
                4. Payments made through the app are subject to our refund
                policy.
              </Text>
              <Text style={styles.modalText}>
                5. By using the app, you agree to our Privacy Policy.
              </Text>
              {/* Add more terms as needed */}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTop: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
  },
  icon_text: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  icon: {
    width: 60,
    height: 60,
  },
  heading: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  subheading: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  containerBottom: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: "#000",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 50,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  strong: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  normal: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  prefix: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalContent: {
    maxHeight: 200,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 10,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

//   return (
//     <View style={styles.container}>
//       <Text>Enter Mobile Number</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <Button title="Next" onPress={handleNext} />
//     </View>
//   );
// };

export default EnterMobileScreen;
