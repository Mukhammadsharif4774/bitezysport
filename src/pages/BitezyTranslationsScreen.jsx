import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FanZoneHeader from '../components/FanZoneHeader';
import BackgroundImage from '../assets/background.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
        <Icon
          name={'futbol-o'}
          size={30}
          color={COLORS.white}
          style={{
            position: 'absolute',
            right: 20,
            bottom: 20,
          }}
        />
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FanZoneHeader />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Ligue 1', '09.02 21:00', 'Marseille \n vs Monaco')}
        {renderBroadcast(
          'Eredivisie',
          '16.03 20:00',
          'Feyenoord \n vs Utrecht',
        )}
        {renderBroadcast(
          'NBA',
          '21.03 20:00',
          'Los Angeles Lakers \n vs Boston Celtics',
        )}
        {renderBroadcast(
          'Serie A',
          '26.04 18:30',
          'Inter Milan \n vs AC Milan',
        )}
        {renderBroadcast('Primeira', '31.05 21:00', 'Sporting CP \n vs Braga')}
        {renderBroadcast(
          'NHL',
          '13.06 19:00',
          'Toronto Maple Leafs \n vs Montreal Canadiens',
        )}
        {renderBroadcast(
          'MLB',
          '26.07 18:00',
          'New York Yankees \n vs Boston Red Sox',
        )}
        {renderBroadcast(
          'Champions',
          '11.08 22:00',
          'Real Madrid \n vs Liverpool',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    borderColor: COLORS.main,
    backgroundColor: COLORS.black,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
    textAlign: 'center',
  },
});
