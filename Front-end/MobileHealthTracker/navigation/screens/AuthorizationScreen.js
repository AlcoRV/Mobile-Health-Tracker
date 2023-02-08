import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, TouchableOpacity, View, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import TextField from '../../ui/TextField';

const fonts = () => Font.loadAsync({
  'lobster': require('../../assets/fonts/Lobster-Regular.ttf')
});

export default function AuthorizationScreen({ it, setIt }) {

  const [login, setLogin] = React.useState(null);
  const [password, setPassword] = React.useState(null);  
  const [password2, setPassword2] = React.useState(null); 
  const [font, setFont] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);

  const getAlert = () => { if(!isRegister || password == password2) 
                            { 
                              Alert.alert(`${it}`); 
                              setIt(it + 1); 
                            }  else {
                              Alert.alert("Are you seriously?"); 
                            }  
                          }

  if (!font){
    return(
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imageBkg} source={require('../../assets/authBkg.jpg')} resizeMode='cover'>
        <Text style={styles.header}>Wellcome!</Text>
        <TextField
          onChangeText={(value) => setLogin(value)}
          placeholder='Enter your login'
        />
        <TextField
          onChangeText={(value) => setPassword(value)}
          placeholder='Enter your password'
          secureTextEntry={true}
        />
        {
          isRegister ? (
          <TextField
            onChangeText={(value) => setPassword2(value)}
            placeholder='Enter your password again'
            secureTextEntry={true}
          />) : null
        }
        <TouchableOpacity onPress={getAlert}>
          <View style={styles.button}>
            <Text style={styles.buttonText}> { isRegister ? "Register" : "Authorize" }</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    fontFamily: 'lobster',
    color: 'white'
  },
  button: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFB029'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  },
  imageBkg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
