import React from 'react';
import {StyleSheet, ImageBackground, FlatList} from 'react-native';
import BitezyMenuComponent from '../components/BitezyMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {products} from '../assets/products';
import BackgroundImage from '../assets/background.png';
import BitezyHeader from '../components/BitezyHeader';

export default function () {
  const renderProduct = ({item}) => <BitezyMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BitezyHeader />

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
