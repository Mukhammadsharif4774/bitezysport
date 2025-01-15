import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, width} from '../helpers/colors';
import Logo from '../assets/logo.png';
export default function ({back = false}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {back ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/back_icon.png')}
            style={styles.image}
          />
          {/*<Icon name={'arrow-left'} size={30} color={COLORS.white} />*/}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.image} />
        </TouchableOpacity>
      )}

      <Image source={Logo} style={styles.logo} />

      <TouchableOpacity onPress={() => navigation.navigate('BitezyCartScreen')}>
        <Image
          source={require('../assets/cart_icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    backgroundColor: COLORS.main,
    elevation: 5,
  },
  image: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  logo: {
    width: '50%',
    height: 50,
    objectFit: 'contain',
  },
});
