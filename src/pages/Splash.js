import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Logo} from '../assets';
import {colors} from '../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Login');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
