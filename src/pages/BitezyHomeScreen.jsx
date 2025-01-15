import React from 'react';
import {StyleSheet, ImageBackground, FlatList} from 'react-native';
import FanZoneMenuComponent from '../components/FanZoneMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {products} from '../assets/products';
import BackgroundImage from '../assets/background.png';
import FanZoneHeader from '../components/FanZoneHeader';

export default function () {
  const renderProduct = ({item}) => <FanZoneMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FanZoneHeader />

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={1}
        horizontal={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.main,
  },
  main: {
    paddingBottom: 100,
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
});
