import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import api from "../services/api";

import logo from "../assets/logo.png";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        navigation.navigate("Profile");
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post("/sessions", {
      name,
      email,
      phone,
    });

    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("name", "email", "phone", name, email, phone);

    navigation.navigate("Profile");
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="paddingBottom"
      style={styles.container}
    >
      <View>
        <Image source={logo} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>NOME *</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>EMAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>WHATSAPP *</Text>
        <TextInput
          style={styles.input}
          placeholder="Whatsaap atual"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCorrect={false}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Encontrar área de lazer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },

  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 28,
    borderRadius: 5,
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});
