import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import React, { useRef, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { auth, app, firebaseConfig } from "../Firebase";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import BackButton from "../components/BackButton";
import PageHeader from "../components/PageHeader";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in!");
      navigation.navigate('HomeScreen');
      // Navigate to your app's main screen or reset the navigation stack here
      // navigation.navigate('MainScreen'); // Adjust according to your navigation setup
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User account created & signed in!");
      navigation.navigate('HomeScreen');
      // Handle successful registration
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.colorWhite }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <BackButton />

        <Text style={styles.continueText}>{isRegistering ? "Register" : "Login"}</Text>
      {errorMessage.length > 0 && <Text style={styles.continueText}>{errorMessage}</Text>}
      

        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

        {isRegistering ? (
        <Pressable style={styles.continueButton} onPress={signUp} >
        <Text style={styles.continueText}>Sign Up and Login</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.continueButton} onPress={signIn} >
        <Text style={styles.continueText}>Login</Text>
        </Pressable>
      )}
      <Button
        title={isRegistering ? "Switch to Login" : "Switch to Register"}
        onPress={() => setIsRegistering(!isRegistering)}
      />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.p_11xl,
  },
  input: {
    borderWidth: 2,
    borderColor: Color.color,
    borderRadius: Border.br_6xl,
    padding: 15,
    marginBottom: 20,
    fontSize: FontSize.size_base,
    color: Color.color1,
    fontFamily: FontFamily.montserratMedium,
  },
  continueButton: {
    height: 86,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.color,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  continueText: {
    color: Color.color1,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 86,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});

export default Login;
