import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import ImageBG from '../assets/images/PhotoBG.jpg';

const LoginScreen = () => {
  const normalStyle = {
    borderColor: '#E8E8E8',
    color: '#BDBDBD',
    backgroundColor: '#F6F6F6',
  };

  const focusStyle = {
    borderColor: '#FF6C00',
    color: '#212121',
    backgroundColor: '#FFFFFF',
  };

  const [inputFocusLogin, setInputFocusLogin] = useState({ ...normalStyle });
  const [inputFocusPass, setInputFocusPass] = useState({ ...normalStyle });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground source={ImageBG} style={styles.imageBg}>
            <View style={styles.contentBox}>
              <Text style={styles.contentTitle}>Увійти</Text>

              <TextInput
                onFocus={() => {
                  setInputFocusLogin({ ...focusStyle });
                }}
                onBlur={() => {
                  setInputFocusLogin({ ...normalStyle });
                }}
                style={[styles.input, inputFocusLogin]}
                placeholder="Адреса електронної пошти"
              />

              <TextInput
                onFocus={() => {
                  setInputFocusPass({ ...focusStyle });
                }}
                onBlur={() => {
                  setInputFocusPass({ ...normalStyle });
                }}
                style={[styles.input, inputFocusPass, styles.inputPass]}
                placeholder="Пароль"
                keyboardType="numeric"
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Немає акаунту?</Text>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.textSolid]}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
  imageBg: {
    width: '100%',
    height: '100%',
  },
  contentBox: {
    width: '100%',
    height: 489,
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  contentTitle: {
    fontFamily: 'roboto-medium',
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
  inputPass: {
    marginBottom: 43,
  },
  button: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#1B4371',
    fontFamily: 'roboto-regular',
    fontSize: 16,
  },
  textSolid: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});
