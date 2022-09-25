import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  BannerSlider,
  HeaderComponent,
  ListKategori,
  ListMenu,
  Jarak,
  Tombol,
} from '../components';
import {colors, fonts} from '../utils';
import {dummyKategori, dummyMenu} from '../data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategori: dummyKategori,
      menus: dummyMenu,
    };
  }

  render() {
    const {kategori, menus} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation}/>
        <ScrollView>
          <BannerSlider />
          <View style={styles.pilihKategori}>
            <Text style={styles.label}>Pilih Kategori</Text>
            <ListKategori kategori={kategori} />
          </View>
          <View style={styles.pilihMenu}>
            <Text style={styles.label}>Menu Rekomendasi</Text>
            <ListMenu menus={menus} navigation={navigation} />

            <Tombol
              title="Lihat Semua"
              type="text"
              padding={7}
              onPress={() => navigation.navigate('Menu')}
            />
          </View>

          <Jarak height={80} />
        </ScrollView>
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
  pilihMenu: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
});
