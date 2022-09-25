import {Text, StyleSheet, Image, View} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../utils';
import {dummyProfile, dummyMenuProfile} from '../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../utils/constant';
import {ListMenuProfile} from '../components';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
      menus: dummyMenuProfile,
    };
  }
  render() {
    const {profile, menus} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.profile}>
            <Text style={styles.nama}>{profile.nama}</Text>
            <Text style={styles.Hp}>No. HP : {profile.nomerHP}</Text>
          </View>
          <ListMenuProfile menus={menus} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
  },
  Hp: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },
});
