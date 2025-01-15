import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, FONTS} from './helpers/colors';
import FanZoneHomeScreen from './pages/FanZoneHomeScreen';
import FanZoneCartScreen from './pages/FanZoneCartScreen';
import FanZoneCartSuccessScreen from './pages/FanZoneCartSuccessScreen';
import FanZoneReservationScreen from './pages/FanZoneReservationScreen';
import FanZoneReservationSuccessScreen from './pages/FanZoneReserveSuccessScreen';
import FanZoneContactsScreen from './pages/FanZoneContactsScreen';
import FanZoneTranslationsScreen from './pages/FanZoneTranslationsScreen';
import FanZoneProductDetailScreen from './pages/FanZoneProductDetailScreen';

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
        name="FanZoneCartScreen"
        component={FanZoneCartScreen}
        options={{title: 'Cart'}}
      />
      <Drawer.Screen
        name="FanZoneCartSuccessScreen"
        component={FanZoneCartSuccessScreen}
        options={{title: 'Cart Success'}}
      />
      <Drawer.Screen
        name="FanZoneReservationScreen"
        component={FanZoneReservationScreen}
        options={{title: 'Reservation'}}
      />
      <Drawer.Screen
        name="FanZoneReservationSuccessScreen"
        component={FanZoneReservationSuccessScreen}
        options={{title: 'Reservation Success'}}
      />

      <Drawer.Screen
        name="FanZoneProductDetailScreen"
        component={FanZoneProductDetailScreen}
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
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: {
          height: 90,
          backgroundColor: COLORS.black,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: FONTS.regular,
          color: COLORS.white,
        },
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'connectdevelop';
          } else if (route.name === 'Translations') {
            iconName = 'futbol-o';
          } else if (route.name === 'Contacts') {
            iconName = 'tty';
          } else if (route.name === 'Reservation') {
            iconName = 'leanpub';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={FanZoneHomeScreen}
        options={{title: 'Меню'}}
      />
      <Tab.Screen
        name="Translations"
        component={FanZoneTranslationsScreen}
        options={{title: 'Транцляции'}}
      />
      <Tab.Screen
        name="Contacts"
        component={FanZoneContactsScreen}
        options={{title: 'Контакты'}}
      />
      <Tab.Screen
        name="Reservation"
        component={FanZoneReservationScreen}
        options={{title: 'Бронь'}}
      />
    </Tab.Navigator>
  );
}
