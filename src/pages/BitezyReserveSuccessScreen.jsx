import React from 'react';
import {Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BitezyHeader from '../components/BitezyHeader';
import BitezyComponent from '../components/BitezyComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'TabNavigator'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BitezyHeader back={true} />

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <BitezyComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.main,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 30,
    marginTop: '25%',
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  successIcon: {
    alignSelf: 'center',
    width: width * 0.7,
    height: width * 0.7,
  },
});
