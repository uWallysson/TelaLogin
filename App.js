import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login() {


  const [inputText, setInputText] = useState('');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/itau.png')}
        />
      </View>

      <View style={styles.container2}>
        <Text style={styles.text}>
          Insira seu email:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
          placeholder="Digite seu email"
          placeholderTextColor='#000'
        />
        
        <Text style={styles.text}>
            Insira sua senha:
        </Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Digite sua senha"
            placeholderTextColor='#000'
            keyboardType="numeric"
            secureTextEntry={true}
        />
        

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    backgroundColor: '#ec7000',
  },
  container2: {
    flex: 1,
    height: 250,
    margin: 30,
    alignItems: 'center',
  },
  logo: {
    margin: 22,
    width: 200,
    height: 200,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    marginRight: 140,
  },
  textInput: {
    flexDirection: 'row',
    width: 310,
    height: 50,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 22,
    padding: 15,
  },
  input: {
    flexDirection: 'row',
    width: 310,
    height: 50,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 22,
    padding: 15,
  },
  botao:{
    width: 300,
    height: 42,
    backgroundColor: '#ec7000',
    marginTop: 10,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText:{
    fontSize: 16,
    color: '#fff'
  }
})

