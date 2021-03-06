import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import api from '../services/api';

export default function SpotList() {
  const ImagePickerSpot = useCallback(() => {
    ImagePicker.launchImageLibrary({
      title: 'Selecione uma foto',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Usar Camera',
      chooseFromLibraryButtonTitle: 'Escolher da galeria'

    }, response => {
      if (response.didCancel) {
        return;
      }
      if (response.error) {
        Alert.alert('Erro no upload da imagem');
      }

      const source = { uri: response.uri };

      console.log(source)

    })
  },[])

  const [name_property, setName_property] = useState('');
  const [address, setAdress] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ScrollView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={styles.container}
    >
      <View style={styles.form}>
        <TouchableOpacity onPress={ImagePickerSpot} style={styles.buttonImage}>
          <Text style={styles.buttonText}>Escolha uma Imagen</Text>
        </TouchableOpacity>

        <Text style={styles.label}>NOME DA ÁREA DE LAZER*</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Sítio ou Chácara"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={name_property}
          onChangeText={setName_property}
        />

        <Text style={styles.label}>ENDEREÇO COMPLETO *</Text>
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#999"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={address}
          onChangeText={setAdress}
        />

        <Text style={styles.label}>VALOR DA DIÁRIA *</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor da diária"
          placeholderTextColor="#999"
          keyboardType="numeric"
          autoCorrect={false}
          value={price}
          onChangeText={setPrice}
        />

        <Text style={styles.label}>DESCRIÇÃO DA ÁREA DE LAZER *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Piscina, Campo de Futebol, Quiosque, etc..."
          placeholderTextColor="#999"
          keyboardType="default"
          autoCorrect={false}
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingBottom: 50,
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 20,
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },

  name_property: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },

  adress: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 20,
    fontSize: 12,
    color: "#444",
    height: 44,
    marginBottom: 28,
    borderRadius: 5,
  },

  price: {
    fontSize: 15,
    color: '#000',
    marginTop: 5,
  },

  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },

  buttonImage: {
    height: 32,
    backgroundColor: '#f05a5b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },

  buttonText: {
    color: '#DDD',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
