import { StyleSheet, View, Text, ImageBackground } from 'react-native';

import ImageBG from '../assets/images/PhotoBG.jpg';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImageBG} style={styles.imageBg}>
        <View style={styles.contentBox}>
          <View style={styles.avatarBox}></View>
        </View>
      </ImageBackground>
    </View>
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
  });
  
