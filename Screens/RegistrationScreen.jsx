import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

import ImageBG from '../assets/images/PhotoBG.jpg';

const RegistrationScreen = () => {
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

  const [inputFocusMail, setInputFocusMail] = useState({ ...normalStyle });
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
              <View style={styles.avatarBox}>
                <Pressable style={styles.avatarAdd}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../assets/images/add.png')}
                  />
                </Pressable>
              </View>
              <Text style={styles.contentTitle}>Реєстрація</Text>

              <TextInput
                onFocus={() => {
                  setInputFocusLogin({ ...focusStyle });
                }}
                onBlur={() => {
                  setInputFocusLogin({ ...normalStyle });
                }}
                style={[styles.input, inputFocusLogin]}
                placeholder="Логін"
              />

              <TextInput
                onFocus={() => {
                  setInputFocusMail({ ...focusStyle });
                }}
                onBlur={() => {
                  setInputFocusMail({ ...normalStyle });
                }}
                style={[styles.input, inputFocusMail]}
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
                <Text style={styles.buttonText}>Зареєстуватися</Text>
              </TouchableOpacity>

              <View style={styles.textContainer}>
                <Text style={styles.text}>Вже є акаунт?</Text>
                <TouchableOpacity>
                  <Text style={[styles.text, styles.textSolid]}>Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {},
  imageBg: {
    width: '100%',
    height: '100%',
  },
  contentBox: {
    width: '100%',
    height: 549,
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatarBox: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'relative',
    top: -60,
  },
  avatarAdd: {
    position: 'relative',
    left: 107,
    top: 80,
  },
  contentTitle: {
    fontFamily: 'roboto-medium',
    fontSize: 30,
    marginBottom: 32,
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
