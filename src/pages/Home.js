/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {BannerSlider, HeaderComponent, ListKategori} from '../components';
import {colors, fonts} from '../utils';
import {dummyKategori} from '../data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategori: dummyKategori,
    };
  }

  render() {
    const {kategori} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <BannerSlider />
        <View style={styles.pilihKategori}>
          <Text style={styles.label}>Pilih Kategori</Text>
          <ListKategori kategori={kategori} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pilihKategori: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontStyle: fonts.primary.bold,
    color: colors.secondary,
    marginBottom: 5,
  },
});
