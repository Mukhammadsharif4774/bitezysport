import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BitezyHeader from '../components/BitezyHeader';
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
      <BitezyHeader />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'Ligue 1',
          '10.02 20:45',
          'Paris Saint-Germain \n vs Lille',
        )}
        {renderBroadcast('Eredivisie', '17.03 19:30', 'Ajax \n vs AZ Alkmaar')}
        {renderBroadcast(
          'NBA',
          '22.03 20:30',
          'Golden State Warriors \n vs Miami Heat',
        )}
        {renderBroadcast('Serie A', '27.04 19:45', 'Juventus \n vs Napoli')}
        {renderBroadcast('Primeira', '01.06 20:00', 'Benfica \n vs Porto')}
        {renderBroadcast(
          'NHL',
          '14.06 20:00',
          'Boston Bruins \n vs Washington Capitals',
        )}
        {renderBroadcast(
          'MLB',
          '27.07 19:15',
          'Los Angeles Dodgers \n vs San Francisco Giants',
        )}
        {renderBroadcast(
          'Champions',
          '12.08 21:45',
          'Manchester City \n vs Barcelona',
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
    backgroundColor: COLORS.white,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.main,
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
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.black,
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
