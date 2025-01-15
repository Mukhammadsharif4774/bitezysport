import React from 'react';
import {StyleSheet, Text, ImageBackground, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BackgroundImage from '../assets/background.png';
import FanZoneHeader from '../components/FanZoneHeader';

export default function FanZoneProductDetailScreen({route}) {
  const {product} = route.params;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FanZoneHeader back={true} />

      <Image source={product?.image} style={styles.image} />

      <Text style={styles.title}>{product?.name}</Text>

      <Text style={styles.description}>{product?.description}</Text>
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
  image: {
    width: width * 0.9,
    height: width * 0.5,
    alignSelf: 'center',
    marginTop: '15%',
    borderRadius: 12,
  },
  title: {
    fontSize: 35,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '100%',
    textAlign: 'center',
    marginTop: '15%',
  },
  description: {
    fontSize: 25,
    fontFamily: FONTS.italic,
    color: COLORS.white,
    width: '100%',
    textAlign: 'center',
    marginTop: '15%',
    paddingHorizontal: 20,
  },
});
