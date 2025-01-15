import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from './helpers/colors';
import BitezyHomeScreen from './pages/BitezyHomeScreen';
import BitezyCartScreen from './pages/BitezyCartScreen';
import BitezyCartSuccessScreen from './pages/BitezyCartSuccessScreen';
import BitezyReservationScreen from './pages/BitezyReservationScreen';
import BitezyReservationSuccessScreen from './pages/BitezyReserveSuccessScreen';
import BitezyContactsScreen from './pages/BitezyContactsScreen';
import BitezyTranslationsScreen from './pages/BitezyTranslationsScreen';
import BitezyProductDetailScreen from './pages/BitezyProductDetailScreen';

const {width} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{title: 'Main'}}
      />
      <Drawer.Screen
        name="BitezyCartScreen"
        component={BitezyCartScreen}
        options={{title: 'Cart'}}
      />
      <Drawer.Screen
        name="BitezyCartSuccessScreen"
        component={BitezyCartSuccessScreen}
        options={{title: 'Cart Success'}}
      />
      <Drawer.Screen
        name="BitezyReservationScreen"
        component={BitezyReservationScreen}
        options={{title: 'Reservation'}}
      />
      <Drawer.Screen
        name="BitezyReservationSuccessScreen"
        component={BitezyReservationSuccessScreen}
        options={{title: 'Reservation Success'}}
      />

      <Drawer.Screen
        name="BitezyProductDetailScreen"
        component={BitezyProductDetailScreen}
        options={{title: 'Reservation Success'}}
      />
    </Drawer.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.main,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {
          height: 90,
          backgroundColor: COLORS.white,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: FONTS.regular,
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'institution';
          } else if (route.name === 'Translations') {
            iconName = 'tv';
          } else if (route.name === 'Contacts') {
            iconName = 'server';
          } else if (route.name === 'Reservation') {
            iconName = 'shopping-bag';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={BitezyHomeScreen}
        options={{title: 'Меню'}}
      />
      <Tab.Screen
        name="Translations"
        component={BitezyTranslationsScreen}
        options={{title: 'Транцляции'}}
      />
      <Tab.Screen
        name="Contacts"
        component={BitezyContactsScreen}
        options={{title: 'Контакты'}}
      />
      <Tab.Screen
        name="Reservation"
        component={BitezyReservationScreen}
        options={{title: 'Бронь'}}
      />
    </Tab.Navigator>
  );
}
